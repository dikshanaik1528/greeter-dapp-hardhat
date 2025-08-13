🚀 Greeter DApp (Hardhat)

A beginner-friendly blockchain project demonstrating the basics of smart contract development, deployment, and interaction using **Solidity**, **Hardhat**, and **Ethers.js**.  
This DApp allows users to **view** and **update** a greeting message stored on the blockchain.

---

📸 Screenshots

**1. Local Node Running**
![Hardhat Node](./screenshots/hardhat-node.png)

**2. Contract Deployment**
![Deployment](./screenshots/deploy.png)

**3. Interaction Example**
![Interaction](./screenshots/interact.png)

---

✨ Features
- 📜 Deploy a **Greeter** smart contract.
- 📝 View and update the greeting message.
- ⚡ Instant interaction on a local blockchain.
- 🧪 Ready for extension into a full DApp.

---

🛠 Tech Stack
- **Solidity** – Smart contract development.
- **Hardhat** – Ethereum development environment.
- **Ethers.js** – Blockchain interaction library.
- **JavaScript** – Scripting and automation.
- **Node.js** – Runtime environment.

---

📂 Project Structure
```

greeter-dapp/
│── contracts/         # Solidity contracts
│   └── Greeter.sol
│── test/           # Deployment & interaction scripts
│   └── deploy.js
│── test/              # Test scripts
│── hardhat.config.js  # Hardhat configuration
│── package.json
│── screenshots/       # Project screenshots
└── README.md

````

---

🚀 Getting Started

1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/greeter-dapp-hardhat.git
cd greeter-dapp-hardhat
````

2️⃣ Install Dependencies

```bash
npm install
```

3️⃣ Compile the Smart Contract

```bash
npx hardhat compile
```

4️⃣ Start a Local Blockchain

```bash
npx hardhat node
```
5️⃣ Deploy the Contract

In a **new terminal window**:

```bash
npx hardhat run scripts/deploy.js --network localhost
```


📜 Smart Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Greeter {
    string public greeting;

    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }
}

💡 How It Works

1. **Deploy** the contract with an initial greeting message.
2. **Read** the greeting from the blockchain.
3. **Update** the greeting, and instantly view the new message.

📌 Future Improvements

* 🌐 Add a **React Frontend** for UI interaction.
* 🔗 Deploy to **Sepolia Testnet** for public access.
* 🎨 Add styling and animations for better UX.

📜 License

This project is licensed under the **MIT License**.

