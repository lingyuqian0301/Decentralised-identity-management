import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file
import { QRCodeCanvas } from 'qrcode.react'; // Use QRCodeCanvas for QR code generation
import ConnectWallet from './ConnectWallet.js'; // Wallet connection component
import SendTransactionContract from './SendTransactionContract.js'; 

const App = () => {
  const [account, setAccount] = useState(''); // Account address state
  const [role, setRole] = useState('');
  const [permissions, setPermissions] = useState(''); // Store permissions
  const [status, setStatus] = useState('active'); // Default status is active
  const [identities, setIdentities] = useState([]); // Store identities created
  const [selectedIdentity, setSelectedIdentity] = useState(null); // Store the identity for QR code

  // Function to simulate loading a default account if needed
  useEffect(() => {
    loadDemoAccount();
  }, []);

  const loadDemoAccount = () => {
    console.log('Demo account loaded:', account);  // Demo account loaded or updated log
  };

  // Function to create a new identity
  const createIdentity = () => {
    const expiryTime = Math.floor(Date.now() / 1000) + 3600; // 1 hour from now
    const newIdentity = {
      id: `ID-${Math.random().toString(36).substr(2, 9)}`, // Unique identifier
      role: role,
      permissions: permissions,
      status: status,
      creationTime: new Date().toLocaleString(), // Capture the current time
      expiryTime: new Date(expiryTime * 1000).toLocaleString(), // Convert to readable format
      createdBy: account || 'Demo Account', // Store the creator's account or demo if wallet not connected
    };

    setIdentities([...identities, newIdentity]); // Add new identity to the state
    alert(`Identity created! Role: ${role}, Expiry: ${newIdentity.expiryTime}`);
    setRole(''); // Clear role input field after creation
    setPermissions(''); // Clear permissions input
  };

  // Function to download identity as JSON
  const downloadIdentity = (identity) => {
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(identity, null, 2))}`;
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', `${identity.id}_identity.json`);
    document.body.appendChild(downloadAnchorNode); // Required for Firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  // Set identity to show QR code
  const showQRCode = (identity) => {
    setSelectedIdentity(identity);
  };

  return (
    <div className="container">
      <h2>Ethereum Decentralized Identity Management</h2>

      {/* Wallet Connection */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <ConnectWallet onAddressChange={(address) => setAccount(address)} />
      </div>

      {/* Form to Create a New Identity */}
      <div className="form-container">
        <input
          type="text"
          placeholder="Role (e.g., admin, user)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Permissions (e.g., read, write)"
          value={permissions}
          onChange={(e) => setPermissions(e.target.value)}
          className="input-field"
        />
        <button className="btn-create" onClick={createIdentity}>Create Identity</button>
      </div>

      {/* Display Created Identities */}
      <h3>Created Identities</h3>
      <ul className="identity-list">
        {identities.map((identity, index) => (
          <li key={index} className="identity-item">
            <strong>ID:</strong> {identity.id} <br />
            <strong>Role:</strong> {identity.role} <br />
            <strong>Permissions:</strong> {identity.permissions} <br />
            <strong>Status:</strong> {identity.status} <br />
            <strong>Creation Time:</strong> {identity.creationTime} <br />
            <strong>Expiry Time:</strong> {identity.expiryTime} <br />
            <strong>Created By:</strong> {identity.createdBy} <br />
            <button className="btn-download" onClick={() => downloadIdentity(identity)}>Download Identity</button>
            <button className="btn-show-qr" onClick={() => showQRCode(identity)}>Show QR Code</button>
          </li>
        ))}
      </ul>

      {/* QR Code Display */}
      {selectedIdentity && (
        <div className="qr-code-container">
          <h3>QR Code for Identity: {selectedIdentity.id}</h3>
          <QRCodeCanvas
            value={JSON.stringify(selectedIdentity)} // Convert identity to JSON and display as QR code
            size={256} // QR code size
            level={"H"} // Error correction level
            includeMargin={true} // Include margin around the QR code
          />
          <br />
          <button className="btn-close-qr" onClick={() => setSelectedIdentity(null)}>Close QR Code</button>
        </div>
      )}
    </div>
  );
};

export default App;
