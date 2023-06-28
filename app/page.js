// import React from "react";
// import data from "../constant/FinalData.json";
// import StackData from "../components/StackData";

// const HomePage = () => {
//   return (
//     <div>
//       <StackData data={data} />
//     </div>
//   );
// };

// export default HomePage;
"use client";
import React, { useContext } from "react";
import { StackDataContext } from "../utils/StackContext";
import data from "../constant/FinalData.json";

const Home = () => {
  const { selectedAddress } = useContext(StackDataContext);

  const selectedData = data.find(
    (item) => item.stake_address === selectedAddress
  );

  return (
    <div>
      {selectedData ? (
        <div>
          <h2>Stack Address: {selectedData.stake_address}</h2>
          <p>Total Balance: {selectedData.total_balance}</p>
          {/* Display other data here */}
        </div>
      ) : (
        <p>Please select a stake address from the navbar.</p>
      )}
    </div>
  );
};

export default Home;
