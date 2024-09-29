import React from 'react';

async function transferEth() {
    try {
        // Check if MetaMask is available
        if (typeof window.ethereum !== 'undefined') {
            const provider = window.ethereum;

            // Request account access if needed
            await provider.request({ method: 'eth_requestAccounts' });

            // Get the user's active account (first one in the list)
            const accounts = await provider.request({ method: 'eth_accounts' });

            if (!accounts || accounts.length === 0) {
                alert("No account found. Please ensure MetaMask is connected.");
                return;
            }

            const sender = accounts[0]; // Sender address

            // Set recipient address and amount in ETH
            const recipient = "0xb84343E80427E605A7d4e44A1E2BbF533d6D38fb"; // Ensure this is valid
            const amountInEth = 0.01; // Adjust as needed for testing

            // Check if the recipient address is valid
            if (!recipient || !recipient.startsWith('0x') || recipient.length !== 42) {
                alert("Please enter a valid recipient address.");
                return;
            }

            // Ensure both recipient and amount are provided
            if (!recipient || !amountInEth) {
                alert("Please enter a valid recipient address and amount in ETH.");
                return;
            }

            // Convert the amount from ETH to Wei (1 ETH = 1e18 Wei)
            const amountInWei = (parseFloat(amountInEth) * 1e18).toString();

            console.log(`Sending ${amountInEth} ETH (${amountInWei} Wei) to ${recipient}`);

            // Create the transaction parameters
            const txParams = {
                from: sender, // MetaMask will prompt the user to approve this account
                to: recipient, // Recipient address
                value: amountInWei, // Amount in Wei (ETH to Wei conversion)
                gas: '21000', // Optional gas limit
                gasPrice: '20000000000' // Optional gas price (20 Gwei)
            };

            // Send the transaction
            const txHash = await provider.request({
                method: 'eth_sendTransaction',
                params: [txParams],
            });

            // Transaction successful, log the transaction hash
            console.log('Transaction sent! TxHash:', txHash);
            alert(`Transaction sent! TxHash: ${txHash}`);
        } else {
            alert('MetaMask is not installed. Please install MetaMask.');
        }
    } catch (error) {
        console.error('Error sending transaction:', error);
        alert(`Error sending transaction: ${error.message}`);
    }
}

const SendTransactionContract = () => {
    return (
        <button onClick={transferEth} style={{ margin: '20px' }}>
            Create your own Reputation ID
        </button>
    );
};

export default SendTransactionContract;
