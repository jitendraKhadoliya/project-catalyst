// // "use client";
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
import animationData from "@/public/json/hologram.json";

const HomeWithStackAddress = () => {
  const { selectedAddress } = useContext(StackDataContext);
  const chartRef = useRef(null);
  const [selectedBubble, setSelectedBubble] = useState(null);
  const [chartWidth, setChartWidth] = useState(400);

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
      const height = 400;

      // Define the bubble chart layout
      const bubble = d3.pack().size([chartWidth, height]).padding(20.5);

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
        .attr("width", chartWidth)
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
  }, [chartWidth, handleBubbleClick, selectedAddress, selectedData]);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(selectedBubble.address);
  };

  const animationContainerRef = useLottieAnimation(animationData);

  useEffect(() => {
    // Update the chart width on window resize
    const handleResize = () => {
      const newWidth = window.innerWidth < 640 ? 340 : 800;
      setChartWidth(newWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      <div
        ref={animationContainerRef}
        className="absolute inset-0 max-h-screen max-h-59 z-0"
      ></div>
      <div
        ref={chartRef}
        className="chart h-[100vh] flex justify-center items-center"
      ></div>
      {selectedBubble && (
        <div className="bubble-details absolute z-20 px-4 py-2 rounded-lg border-t-2 border-gray-500 border-b-2 top-[-18px] w-[40%] backdrop-blur-md">
          <span className="flex w-full justify-end my-1">
            <button
              className="close-button border-none cursor-pointer"
              onClick={handleCloseButtonClick}
            >
              <AiOutlineClose size={27} className="hover:scale-125" />
            </button>
          </span>
          <div>
            <h3 className="bubble-address">
              <span className="mr-2 text-lg">Address:</span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text font-semibold whitespace-normal break-words">
                {selectedBubble.address}
              </span>
            </h3>
            <span
              className="flex justify-start items-center mt-2 mb-2"
              onClick={handleCopyAddress}
            >
              <span className="mr-2 text-lg">Copy Address: </span>
              <AiOutlineCopy
                size={22}
                className="cursor-pointer"
                onClick={handleCopyAddress}
              />
            </span>
            <p>
              <span className="mr-2 text-lg">Value:</span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text font-semibold">
                {selectedBubble.value} ADA
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeWithStackAddress;
