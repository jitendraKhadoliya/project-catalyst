// //homepage
// "use client";
// import React, { useContext } from "react";
// import { StackDataContext } from "../utils/StackContext";
// import data from "../constant/FinalData.json";
// import "./homepage.css";

// const Home = () => {
//   const { selectedAddress } = useContext(StackDataContext);

//   const selectedData = data.find(
//     (item) => item.stake_address === selectedAddress
//   );

//   return (
//     <div>
//       <div>
//         {/* <iframe
//           className="h-[70vh] w-full"
//           src="https://app.bubblemaps.io/bsc/token/0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95"
//         /> */}
//       </div>
//       {selectedData ? (
//         <div>
//           <h2>Stack Address: {selectedData.stake_address}</h2>
//           <p>Total Balance: {selectedData.total_balance}</p>
//           <p>Total UTxO: {selectedData.total_utxo}</p>
//           <h3>Outgoing Transactions:</h3>
//           <ul>
//             {selectedData.outgoing_transactions.map((transaction, idx) => (
//               <li key={idx}>
//                 <p>Address: {transaction.address}</p>
//                 <p>Value: {transaction.value}</p>
//               </li>
//             ))}
//           </ul>
//           {/* Display other data here */}
//         </div>
//       ) : (
//         <p>Please select a stake address from the navbar.</p>
//       )}
//     </div>
//   );
// };

// export default Home;

// "use client";
// import React, { useContext, useEffect, useRef } from "react";
// import { StackDataContext } from "../utils/StackContext";
// import data from "../constant/FinalData.json";
// import * as d3 from "d3";
// import "./homepage.css";

// const Home = () => {
//   const { selectedAddress } = useContext(StackDataContext);
//   const chartRef = useRef(null);

//   useEffect(() => {
//     // Find the selected data for the stack address
//     const selectedData = data.find(
//       (item) => item.stake_address === selectedAddress
//     );

//     // Clear any previous chart
//     d3.select(chartRef.current).selectAll("*").remove();

//     // Create a new chart if data is available
//     if (selectedData) {
//       const width = 600;
//       const height = 400;

//       // Define the bubble chart layout
//       const bubble = d3.pack().size([width, height]).padding(1.5);

//       // Create a hierarchy of data for the bubble chart
//       const root = d3
//         .hierarchy({ children: selectedData.outgoing_transactions })
//         .sum((d) => d.value);

//       // Generate the bubble positions and sizes
//       bubble(root);

//       // Create the SVG container for the chart
//       const svg = d3
//         .select(chartRef.current)
//         .append("svg")
//         .attr("width", width)
//         .attr("height", height);

//       // Create the bubble elements
//       const bubbles = svg
//         .selectAll(".bubble")
//         .data(root.children)
//         .enter()
//         .append("g")
//         .attr("class", "bubble")
//         .attr("transform", (d) => `translate(${d.x},${d.y})`);

//       // Add circles to represent the bubbles
//       bubbles
//         .append("circle")
//         .attr("r", (d) => d.r)
//         .style("fill", "steelblue");

//       // Add text labels to the bubbles
//       bubbles
//         .append("text")
//         .attr("dy", ".3em")
//         .style("text-anchor", "middle")
//         .text((d) => d.data.address);
//     }
//   }, [selectedAddress]);

//   return (
//     <div>
//       <div ref={chartRef} className="chart"></div>
//       {/* Rest of your code */}
//     </div>
//   );
// };

// export default Home;

// !
// "use client";
// import React, { useContext, useEffect, useRef, useState } from "react";
// import { StackDataContext } from "../utils/StackContext";
// import data from "../constant/FinalData.json";
// import * as d3 from "d3";
// import "./homepage.css";

// const Home = () => {
//   const { selectedAddress } = useContext(StackDataContext);
//   const chartRef = useRef(null);
//   const [selectedBubble, setSelectedBubble] = useState(null);

//   useEffect(() => {
//     // Find the selected data for the stack address
//     const selectedData = data.find(
//       (item) => item.stake_address === selectedAddress
//     );
//     const handleClick = (d) => {
//       setSelectedBubble(d);
//     };

//     // Clear any previous chart
//     d3.select(chartRef.current).selectAll("*").remove();

//     // Create a new chart if data is available
//     if (selectedData) {
//       const width = 600;
//       const height = 400;

//       // Define the bubble chart layout
//       const bubble = d3.pack().size([width, height]).padding(1.5);

//       // Create a hierarchy of data for the bubble chart
//       const root = d3
//         .hierarchy({ children: selectedData.outgoing_transactions })
//         .sum((d) => d.value);

//       // Generate the bubble positions and sizes
//       bubble(root);

//       // Create the SVG container for the chart
//       const svg = d3
//         .select(chartRef.current)
//         .append("svg")
//         .attr("width", width)
//         .attr("height", height);

//       // Create the bubble elements
//       const bubbles = svg
//         .selectAll(".bubble")
//         .data(root.children)
//         .enter()
//         .append("g")
//         .attr("class", "bubble")
//         .attr("transform", (d) => `translate(${d.x},${d.y})`)
//         .on("click", (d) => setSelectedBubble(d));

//       // Add circles to represent the bubbles
//       bubbles
//         .append("circle")
//         .attr("r", (d) => d.r)
//         .style("fill", "steelblue");

//       // Add text labels to the bubbles
//       bubbles
//         .append("text")
//         .attr("dy", ".3em")
//         .style("text-anchor", "middle")
//         .text((d) => d.data.address);
//     }
//   }, [selectedAddress]);

//   const handleClosePopup = () => {
//     setSelectedBubble(null);
//   };

//   return (
//     <div>
//       <div ref={chartRef} className="chart"></div>
//       {selectedBubble && (
//         <div className="popup">
//           {/* <span className="popup-address">
//             {selectedBubble &&
//               selectedBubble.data &&
//               selectedBubble.data.address}
//           </span> */}
//           {/* <span className="popup-address">{selectedBubble.data.address}</span> */}
//           {console.log(selectedBubble.text)}

//           <button className="popup-close" onClick={handleClosePopup}>
//             Close
//           </button>
//         </div>
//       )}
//       {/* Rest of your code */}
//     </div>
//   );
// };

// export default Home;

// ! next try
"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { StackDataContext } from "../utils/StackContext";
import data from "../constant/FinalData.json";
import * as d3 from "d3";
import "./homepage.css";

const Home = () => {
  const { selectedAddress } = useContext(StackDataContext);
  const chartRef = useRef(null);
  const [selectedBubble, setSelectedBubble] = useState(null);

  useEffect(() => {
    // Find the selected data for the stack address
    const selectedData = data.find(
      (item) => item.stake_address === selectedAddress
    );

    // Truncate the text and add ellipsis if it exceeds maxLength
    function truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
      }
      return text;
    }

    // Clear any previous chart
    d3.select(chartRef.current).selectAll("*").remove();

    // Create a new chart if data is available
    if (selectedData) {
      const width = 600;
      const height = 400;

      // Define the bubble chart layout
      const bubble = d3.pack().size([width, height]).padding(1.5);

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
        .attr("r", (d) => d.r)
        .style("fill", (d, i) => d3.schemeCategory10[i % 10]);

      // Add text labels to the bubbles
      bubbles
        .append("text")
        .attr("dy", ".3em")
        .style("text-anchor", "middle")
        // .text((d) => d.data.address)
        .text((d) => truncateText(d.data.address, 10)); // Specify the desired maximum length
    }
  }, [selectedAddress]);

  const handleBubbleClick = (event, d) => {
    setSelectedBubble(d.data);
  };

  const handleCloseButtonClick = () => {
    setSelectedBubble(null);
  };

  return (
    <div>
      <div ref={chartRef} className="chart"></div>
      {selectedBubble && (
        <div className="bubble-details">
          <button className="close-button" onClick={handleCloseButtonClick}>
            Close
          </button>
          <div>
            <h2>{selectedBubble.address}</h2>
            <p>Value: {selectedBubble.value}</p>
            {/* Add any other data you want to display */}
          </div>
        </div>
      )}
      {/* Rest of my  code */}
    </div>
  );
};

export default Home;
