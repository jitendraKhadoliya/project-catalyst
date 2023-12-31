'use client';
import React, { useContext } from 'react';
import { StackDataContext } from '../../utils/StackContext';
import data from '../../constant/FinalData.json';
// import WalletAnimation from "@/public/json/walletRecoloured.json";
import WalletAnimation from '@/public/json/flyingWalletMoney.json';
import useLottieAnimation from '@/utils/useLottieAnimation';
import hexForkLogo from '@/public/image/Hexfork_logo.png';
import Image from 'next/image';

const Navbar = () => {
  const { selectedAddress, setSelectedAddress } = useContext(StackDataContext);
  const animationContainerRef = useLottieAnimation(
    WalletAnimation,
    selectedAddress
  );

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
    <nav className=" flex justify-between items-center my-[20px] mx-2 md:mx-8 gap-3">
      <div>
        <Image src={hexForkLogo} alt=" hexfork logo" height={60} />
      </div>
      <div className=" relative justify-center items-center hidden md:flex ">
        {' '}
        {totalBalance ? (
          <>
            <span className=" hidden md:inline"> Total Balance</span>
            <span
              ref={animationContainerRef}
              className=" relative h-10 w-10 mt-[-12px]"
            >
              {' '}
            </span>
            <span className=" mx-1">:</span>
            <span className=" font-semibold "> {totalBalance} </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text ml-1 font-semibold ">
              ADA
            </span>
          </>
        ) : null}
      </div>
      <div>
        <select
          value={selectedAddress}
          onChange={handleAddressChange}
          className="bg-[#0d1117] text-[18px] w-[145px] md:w-full font-sans"
        >
          <option value="">Select an Stake Address</option>
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
