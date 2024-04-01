import { config as dotEnvConfig } from "dotenv"
import { HardhatUserConfig } from "hardhat/config";
dotEnvConfig();

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
<<<<<<< HEAD
      url: INFURA_URL,
      accounts: METAMASK_SECRET_KEY,
=======
      url: "#",
      accounts: ["#"],
>>>>>>> parent of 92f3b51b (challan contract completed and challan context also completed)
    },
  },
};
