# Ethereum Decentralized Identity Management

## Overview

This project is a **React** application for managing decentralized identities on the Ethereum blockchain. It provides features to:

- Connect a wallet
- Create and manage identities
- Generate QR codes for each identity
- Download identity information as JSON files

## Features

1. **Connect Wallet**: Users can connect their Ethereum wallet to the application.
2. **Create Identity**: Generate new identities with roles, permissions, and a default status of `active`.
3. **Download Identity**: Download individual identities in JSON format.
4. **QR Code Generation**: Show QR codes representing an identity.
5. **Display Created Identities**: View all created identities, including their role, permissions, status, and expiration time.

## Technologies Used

- **React**: For building the UI.
- **QRCodeCanvas** from `qrcode.react`: For generating QR codes for the identities.
- **CSS**: For styling the app (included in `App.css`).
- **ConnectWallet.js**: A custom component to handle Ethereum wallet connection.
- **SendTransactionContract.js**: A placeholder for sending transactions (not detailed here).

## How It Works

### 1. Wallet Connection
- The app uses the `ConnectWallet` component to allow users to connect their Ethereum wallet. The connected account is stored in the `account` state.

### 2. Identity Creation
- Users can create new identities by entering a **role** and **permissions**. 
- Each identity includes:
  - A unique `id`.
  - The input role and permissions.
  - The `status` is set to `active` by default.
  - `CreationTime` and `ExpiryTime` are automatically generated, with an expiry time set 1 hour after creation.
  - `CreatedBy` stores the account address or a "Demo Account" if no wallet is connected.

### 3. Displaying Identities
- All created identities are displayed in a list format, showing the following details:
  - ID
  - Role
  - Permissions
  - Status
  - Creation Time
  - Expiry Time
  - Created By

### 4. QR Code Generation
- Each identity can be converted into a QR code using the **QRCodeCanvas** component.
- The QR code contains the JSON representation of the selected identity.

### 5. Download Identity
- Identities can be downloaded as JSON files. The `downloadIdentity` function creates a download link that allows the user to save the identity in JSON format.

## Installation

1. Clone the repository:
    ```bash
    git clone <repo_url>
    cd ethereum-identity-management
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the application:
    ```bash
    npm start
    ```

## How to Use

1. **Connect Wallet**: Click the **Connect Wallet** button to link your Ethereum wallet.
2. **Create Identity**: Fill in the **Role** and **Permissions** fields, then click **Create Identity** to generate a new identity.
3. **View Identities**: Created identities will appear in the list below. You can download any identity or generate a QR code for it.
4. **Download Identity**: Click the **Download Identity** button to save the identity data in JSON format.
5. **Show QR Code**: Click the **Show QR Code** button to display the identity as a QR code.


