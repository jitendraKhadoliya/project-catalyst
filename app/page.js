"use client";
import React, { useContext } from "react";
import { StackDataContext } from "../utils/StackContext";
import data from "../constant/FinalData.json";
import "./homepage.css";

const Home = () => {
  const { selectedAddress } = useContext(StackDataContext);

  const selectedData = data.find(
    (item) => item.stake_address === selectedAddress
  );

  return (
    <div>
      <div>
        <iframe
          className="h-[70vh] w-full"
          src="https://app.bubblemaps.io/bsc/token/0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95"
        />
      </div>
      {selectedData ? (
        <div>
          <h2>Stack Address: {selectedData.stake_address}</h2>
          <p>Total Balance: {selectedData.total_balance}</p>
          <p>Total UTxO: {selectedData.total_utxo}</p>
          <h3>Outgoing Transactions:</h3>
          <ul>
            {selectedData.outgoing_transactions.map((transaction, idx) => (
              <li key={idx}>
                <p>Address: {transaction.address}</p>
                <p>Value: {transaction.value}</p>
              </li>
            ))}
          </ul>
          {/* Display other data here */}
        </div>
      ) : (
        <p>Please select a stake address from the navbar.</p>
      )}
    </div>
  );
};

export default Home;
