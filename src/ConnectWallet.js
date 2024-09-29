import React, { useState } from 'react';
import { BrowserProvider } from 'ethers';  // Correct import from ethers v6

const ConnectWallet = ({ onAddressChange }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null); // For handling errors

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Create an ethers provider using BrowserProvider
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        // Get the user's Ethereum address
        const address = await signer.getAddress();
        setWalletAddress(address);  // Update wallet address state
        setErrorMessage(null); // Clear any previous error messages

        // Callback to pass the address to the parent component
        if (onAddressChange) {
          onAddressChange(address);  // Ensure this function is called properly
        }
      } catch (error) {
        console.error("Error connecting to wallet:", error);
        setErrorMessage("Failed to connect wallet. Please try again.");
      }
    } else {
      setErrorMessage("MetaMask is not installed. Please install it to continue.");
    }
  };

  return (
    <div style={{ padding: '0 0 0 20px' }}>
      {walletAddress ? (
        <p>Connected Wallet Address: {walletAddress}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}

      {/* Display any error messages */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default ConnectWallet;
