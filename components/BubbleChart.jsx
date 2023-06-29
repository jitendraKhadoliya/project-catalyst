// "use client";

// import React, { useContext } from "react";
// import { Bubble } from "react-chartjs-2";
// import { StackDataContext } from "../utils/StackContext";
// import data from "../constant/FinalData.json";

// const BubbleChart = () => {
//   const { selectedAddress } = useContext(StackDataContext);

//   // Filter the data based on the selected stack address
//   const filteredData = data.filter(
//     (item) => item.stake_address === selectedAddress
//   );

//   // Prepare the dataset for the chart
//   const chartData = {
//     datasets: [
//       {
//         label: "Stack Addresses",
//         data: filteredData.map((item) => ({
//           x: item.total_balance,
//           y: item.total_utxo,
//           r: item.outgoing_transactions.length * 10, // Adjust the size of the bubble based on the number of outgoing transactions
//         })),
//         backgroundColor: "rgba(75, 192, 192, 0.6)", // Adjust the bubble color as needed
//       },
//     ],
//   };

//   const chartOptions = {
//     scales: {
//       x: {
//         type: "linear",
//         position: "bottom",
//       },
//       y: {
//         type: "linear",
//         position: "left",
//       },
//     },
//   };

//   return (
//     <div>
//       <Bubble data={chartData} options={chartOptions} />
//     </div>
//   );
// };

// export default BubbleChart;
"use client";
import { useEffect, useRef } from "react";
import { Bubble } from "react-chartjs-2";

const BubbleChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data) {
      renderChart(data);
    }
  }, [data]);

  const renderChart = (data) => {
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Bubble Chart",
        },
      },
    };

    const chartData = {
      datasets: [
        {
          label: "Bubble Chart",
          data: data,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
        },
      ],
    };

    const chartConfig = {
      type: "bubble",
      data: chartData,
      options: options,
    };

    // Update the chart
    chartRef.current.chartInstance.data = chartData;
    chartRef.current.chartInstance.update();
  };

  return <Bubble ref={chartRef} />;
};

export default BubbleChart;
