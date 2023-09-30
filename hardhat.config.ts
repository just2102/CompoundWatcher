import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    arbitrum: {
      url: "https://arb1.arbitrum.io/rpc",
    },
  },
};

export default config;
