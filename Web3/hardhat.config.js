import { config as dotEnvConfig } from "dotenv"
import { HardhatUserConfig } from "hardhat/config";
dotEnvConfig();

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: INFURA_URL,
      accounts: METAMASK_SECRET_KEY,
    },
  },
};
