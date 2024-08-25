// run.js
const hre = require("hardhat");
const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory("Web3Mint");
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);
// makeAnEpicNFT 関数を呼び出す。NFT が Mint される。
    let txn = await nftContract.makeAnEpicNFT();
// Minting が仮想マイナーにより、承認されるのを待つ。
    await txn.wait();
// makeAnEpicNFT 関数をもう一度呼び出す。NFT がまた Mint される。
    txn = await nftContract.makeAnEpicNFT();
// Minting が仮想マイナーにより、承認されるのを待つ。
    await txn.wait();
};
(async () => {
    try {
        await main();
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
