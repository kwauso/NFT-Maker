import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
//import "@openzeppelin/contracts/token/ERC721";
//openzeppelinはsolidity

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/VeYymad_eRQAXZ-ikC7a_JspEAarL2dQ",
      accounts: ["fa5b7d43010836b5688fe12adf114a182187e545ed567c5072eeab433d9dff89"],
    },
  }
};

export default config;
