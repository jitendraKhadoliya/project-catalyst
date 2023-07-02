'use client';
import React, { useState } from 'react';

const StackData = ({ data }) => {
  const [selectedAddress, setSelectedAddress] = useState('');

  const handleAddressChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  const selectedData = data.find(
    (item) => item.stake_address === selectedAddress
  );

  return (
    <div>
      <select value={selectedAddress} onChange={handleAddressChange}>
        <option value="">Select a Stake Address</option>
        {data.map((item, index) => (
          <option key={index} value={item.stake_address}>
            {item.stake_address}
          </option>
        ))}
      </select>

      {selectedData && (
        <div>
          <h2>Stack Address: {selectedData.stake_address}</h2>
          <p>Total Balance: {selectedData.total_balance}</p>
          <p>Total UTxO: {selectedData.total_utxo}</p>
          {/* <h3>UTxO Set:</h3>
          <ul>
            {selectedData.UTxO_set.map((utxo, idx) => (
              <li key={idx}>
                <p>UTxO: {utxo}</p>
              </li>
            ))}
          </ul> */}
          <h3>Outgoing Transactions:</h3>
          <ul>
            {selectedData.outgoing_transactions.map((transaction, idx) => (
              <li key={idx}>
                <p>Address: {transaction.address}</p>
                <p>Value: {transaction.value}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StackData;
