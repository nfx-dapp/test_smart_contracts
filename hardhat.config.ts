import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    mantleTestnet: {
      url: process.env.MANTLE_RPC_URL,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
};

export default config;
