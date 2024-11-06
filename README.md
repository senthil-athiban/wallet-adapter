# Solana Wallet App

A Solana-based wallet application that allows users to interact with the Solana blockchain, providing features like airdropping SOL, signing messages, and transferring SOL.

## Features

- **Airdrop SOL**: Easily airdrop SOL to your wallet for development and testing purposes.
- **Sign Messages**: Sign messages with your Solana wallet.
- **Transfer SOL**: Send SOL to other addresses on the Solana blockchain.
- **Wallet Connection**: Connect and disconnect your Solana wallet securely.

## Local Setup

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).

### Steps to Run Locally

1. **Clone the Repository**  
   Clone this repository to your local machine:
   ```bash
    git clone https://github.com/your-username/wallet-adapter.git
   ```

2. **Install Dependencies**
    Navigate to the project folder and install the required dependencies:
    ```bash
    cd wallet-adapter
    yarn install
    ```

3. **Start the Development Server**
Run the development server:
    ```bash
    yarn dev
    ```

Open in Browser
Open your browser and navigate to http://localhost:3000 to see the app running locally.

## Configuration
The app is configured to connect to the Solana Devnet by default via the endpoint https://api.devnet.solana.com. You can modify this URL if you need to connect to a different Solana network (e.g., Testnet or Mainnet)

## Usage
Once the app is running locally:

- **Connect your Wallet**: Use the wallet modal to connect your Solana wallet (e.g., Phantom, Sollet).
- **Airdrop SOL**: Use the "Airdrop SOL" feature to receive SOL on your wallet.
- **Sign Messages:** Use the wallet to sign any messages.
- **Transfer SOL:** Send SOL to any other Solana address using the transfer feature.

## Contributing
If you want to contribute to this project, feel free to fork the repository and create a pull request. Please ensure that any changes you make are well-documented.

## License
This project is licensed under the MIT License.