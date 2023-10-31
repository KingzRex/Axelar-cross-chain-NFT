require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
require("solidity-coverage");

const PRIVATE_KEY = process.env.EVM_PRIVATE_KEY;

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      chainId: 80001,
      accounts: [PRIVATE_KEY],
    },
    avalancheFujiTestnet: {
      url: "https://avalanche-fuji-c-chain.publicnode.com",
      chainId: 43113,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    url: "https://rpc.ankr.com/polygon_mumbai",
    apiKey: {
      polygonMumbai: "RZ2RSK3GIMZHPGF57NN42A9PZQET8K4FD6",
    },
  },

  paths: {
    sources: './contracts',
    artifacts: './artifacts',
  },

};
