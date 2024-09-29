# NFT Identity Management Application

This project is a React-based web application for managing NFT (Non-Fungible Token) identities. It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and includes additional functionality for creating, managing, and visualizing NFT identities.

## Features

1. **Wallet Connection**: Users can connect their Ethereum wallet to the application.
2. **Identity Creation**: Create new NFT identities with roles, permissions, and expiration times.
3. **Identity Management**: View and manage created identities.
4. **QR Code Generation**: Generate QR codes for easy sharing of identity information.
5. **JSON Download**: Download identity information as a JSON file.
6. **Transaction Sending**: Send transactions to a smart contract (functionality included but not fully implemented in the provided code).

## Project Structure

The main application logic is contained in the `App.js` file:

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Dependencies

The project uses several key dependencies:

- React: For building the user interface
- ethers: For Ethereum wallet integration
- qrcode.react: For generating QR codes
- web3: For interacting with Ethereum blockchain

For a full list of dependencies, refer to the `package.json` file:

## Learn More

To learn more about React, check out the [React documentation](https://reactjs.org/).

For more information about Create React App, visit the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Deployment

For information on deploying this application, see the [deployment section](https://facebook.github.io/create-react-app/docs/deployment) in the Create React App documentation.

## Troubleshooting

If you encounter issues with `npm run build` failing to minify, refer to this [troubleshooting guide](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify).

## Additional Components

The application includes additional components (not fully visible in the provided code snippets):

- `ConnectWallet.js`: For handling wallet connection
- `SendTransactionContract.js`: For sending transactions to a smart contract
