// "use client";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import data from "@/constant/FinalData.json";
import * as d3 from "d3";
import "./HomeWithStackAddress.css";
import { AiOutlineClose, AiOutlineCopy } from "react-icons/ai";
import { StackDataContext } from "@/utils/StackContext";
import useLottieAnimation from "@/utils/useLottieAnimation";
import animationData from "@/public/json/currency.json";

const HomeWithStackAddress = () => {
  const { selectedAddress } = useContext(StackDataContext);
  const chartRef = useRef(null);
  const [selectedBubble, setSelectedBubble] = useState(null);

  // Truncate the text if its width exceeds maxWidth
  function truncateText(text, maxWidth) {
    const ellipsis = "...";
    const textContainer = document.createElement("div");
    textContainer.style.position = "absolute";
    textContainer.style.visibility = "hidden";
    textContainer.style.width = "auto";
    textContainer.style.maxWidth = `${maxWidth}px`;
    textContainer.textContent = text;
    document.body.appendChild(textContainer);

    let truncatedText = text;
    while (textContainer.scrollWidth > maxWidth && truncatedText.length > 0) {
      truncatedText = truncatedText.slice(0, -1);
      textContainer.textContent = truncatedText + ellipsis;
    }

    const finalText = textContainer.textContent;
    document.body.removeChild(textContainer);

    return finalText;
  }

  const selectedData = useMemo(() => {
    return data.find((item) => item.stake_address === selectedAddress);
  }, [selectedAddress]);

  const handleBubbleClick = useCallback((event, d) => {
    setSelectedBubble(d.data);
  }, []);

  const handleCloseButtonClick = useCallback(() => {
    setSelectedBubble(null);
  }, []);

  useEffect(() => {
    // Clear any previous chart
    d3.select(chartRef.current).selectAll("*").remove();

    // Create a new chart if data is available
    if (selectedData) {
      const width = 600;
      const height = 400;

      // Define the bubble chart layout
      const bubble = d3.pack().size([width, height]).padding(20.5);

      // Create a hierarchy of data for the bubble chart
      const root = d3
        .hierarchy({ children: selectedData.outgoing_transactions })
        .sum((d) => d.value);

      // Generate the bubble positions and sizes
      bubble(root);

      // Create the SVG container for the chart
      const svg = d3
        .select(chartRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      // Create the bubble elements
      const bubbles = svg
        .selectAll(".bubble")
        .data(root.children)
        .enter()
        .append("g")
        .attr("class", "bubble")
        .attr("transform", (d) => `translate(${d.x},${d.y})`)
        .on("click", handleBubbleClick);

      // Add circles to represent the bubbles
      bubbles
        .append("circle")
        .attr("r", 0)
        .style("fill", (d, i) => d3.schemeCategory10[i % 10])
        .transition()
        .duration(100) // Transition duration
        .attr("r", (d) => d.r) // Transition to the actual radius
        .style("cursor", "pointer"); // Set the cursor to a pointer

      // Add text labels to the bubbles
      bubbles
        .append("text")
        .attr("dy", ".3em")
        .style("text-anchor", "middle")
        .style("cursor", "pointer") // Set the cursor to a pointer
        .text((d) => {
          if (d.r < 10) {
            return "";
          }
          return truncateText(d.data.address, d.r * 0.7);
        })
        .style("font-size", (d) => `${Math.min(0.5 * d.r, 40)}px`);

      // Shake the bubbles continuously
      const shakeInterval = setInterval(() => {
        bubbles
          .transition()
          .duration(1000) // Transition duration
          .attr("transform", (d) => {
            const newX = d.x + (Math.random() - 0.5) * 20; // Shake X position
            const newY = d.y + (Math.random() - 0.5) * 20; // Shake Y position
            return `translate(${newX},${newY})`;
          });
      }, 800); // Interval between shakes

      // Clean up the interval on component unmount
      return () => {
        clearInterval(shakeInterval);
      };
    }
  }, [handleBubbleClick, selectedAddress, selectedData]);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(selectedBubble.address);
  };

  const animationContainerRef = useLottieAnimation(animationData);

  return (
    <div className=" relative">
      <div
        ref={animationContainerRef}
        // className="absolute inset-0 max-h-screen max-h-59 z-0"
        className="animation-container"
      ></div>
      <div ref={chartRef} className="chart h-[100vh]"></div>
      {selectedBubble && (
        <div className="bubble-details relative z-20">
          <button className="close-button" onClick={handleCloseButtonClick}>
            <AiOutlineClose size={17} className="hover:scale-125" />
          </button>
          <div>
            <h3 className="bubble-address">
              Address: {selectedBubble.address}
            </h3>
            <span
              className="flex justify-start items-center mt-2 mb-2"
              onClick={handleCopyAddress}
            >
              Copy Address{" "}
              <AiOutlineCopy
                size={22}
                className="ml-2 cursor-pointer"
                onClick={handleCopyAddress}
              />
            </span>
            <p>Value: {selectedBubble.value}</p>
            {/* Add any other data you want to display */}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeWithStackAddress;
