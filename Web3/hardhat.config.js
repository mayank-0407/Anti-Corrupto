require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/DoOCypCcsa4S7MiscIxQIa9ee6pZh4-A",
      accounts: [
        "8ea94c3ad1541cc77be3974ac94cd9c94ce21d9bde28058f38415ea6c973a4d9",
      ],
    },
  },
};
