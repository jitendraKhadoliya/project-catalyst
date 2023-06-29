// "use client";
// import React, { useContext } from "react";
// import { StackDataContext } from "../../utils/StackContext";
// import data from "../../constant/FinalData.json";

// const Navbar = () => {
//   const { selectedAddress, setSelectedAddress } = useContext(StackDataContext);

//   const handleAddressChange = (event) => {
//     setSelectedAddress(event.target.value);
//   };
//   console.log(selectedAddress);
//   return (
//     <nav className=" flex justify-between">
//       <div>
//         <span>Hexfork Logo {"HexFork"} </span>
//       </div>
//       <div>
//         <select value={selectedAddress} onChange={handleAddressChange}>
//           <option value="">Select a Stake Address</option>
//           {data.map((item, index) => (
//             <option key={item.stake_address} value={item.stake_address}>
//               {`Address ${index + 1}
//               `}
//               {item.stake_address}
//             </option>
//           ))}
//         </select>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// // Rest of the code...
"use client";
import React, { useContext } from "react";
import { StackDataContext } from "../../utils/StackContext";
import data from "../../constant/FinalData.json";

const Navbar = () => {
  const { selectedAddress, setSelectedAddress } = useContext(StackDataContext);

  // Find the data for the selected stack address
  const selectedData = data.find(
    (item) => item.stake_address === selectedAddress
  );

  // Retrieve the total balance if the stack address is selected
  const totalBalance = selectedData ? selectedData.total_balance : 0;

  const handleAddressChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  return (
    <nav className=" flex justify-between items-center my-[20px] mx-3 ">
      <div>
        <span>Hexfork Logo {"HexFork"} </span>
      </div>
      <div>Loading bar.....</div>
      <div> {totalBalance ? `Total Balance: ${totalBalance}` : ``}</div>
      <div>
        <select value={selectedAddress} onChange={handleAddressChange}>
          <option value="">Select a Stake Address</option>
          {data.map((item, index) => (
            <option key={item.stake_address} value={item.stake_address}>
              {`Address ${index + 1}`}
              {/* {item.stake_address} */}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
