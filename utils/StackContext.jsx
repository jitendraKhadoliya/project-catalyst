// StackContext
'use client';
import React, { createContext, useState } from 'react';

// Create the context
export const StackDataContext = createContext();

// Create a provider component
export const StackDataProvider = ({ children }) => {
  const [selectedAddress, setSelectedAddress] = useState('');

  return (
    <StackDataContext.Provider value={{ selectedAddress, setSelectedAddress }}>
      {children}
    </StackDataContext.Provider>
  );
};
