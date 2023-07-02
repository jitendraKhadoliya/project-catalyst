'use client';
import React, { useContext } from 'react';
import HomeWithStackAddress from '@/components/homeWithStackAddress/HomeWithStackAddress';
import HomeWithoutStackAddress from '@/components/HomeWithoutStackAddress';
import { StackDataContext } from '../utils/StackContext';

const Home = () => {
  const { selectedAddress } = useContext(StackDataContext);

  return (
    <div className="home-container">
      {selectedAddress ? (
        <HomeWithStackAddress selectedAddress={selectedAddress} />
      ) : (
        <HomeWithoutStackAddress />
      )}
    </div>
  );
};

export default Home;
