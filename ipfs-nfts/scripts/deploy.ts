const hre = require("hardhat");
const newMain = async () => {
// コントラクトがコンパイルします
// コントラクトを扱うために必要なファイルが `artifacts` ディレクトリの直下に生成されます。
const nftContractFactory = await hre.ethers.getContractFactory("Web3Mint");
// Hardhat がローカルの Ethereum ネットワークを作成します。
    const nftContract = await nftContractFactory.deploy();
// コントラクトが Mint され、ローカルのブロックチェーンにデプロイされるまで待ちます。
await nftContract.waitForDeployment();
    const address = await nftContract.getAddress()
    console.log("Contract deployed to:", address);
// makeAnEpicNFT 関数を呼び出す。NFT が Mint される。
    let txn = await nftContract.makeAnEpicNFT();
// Minting が仮想マイナーにより、承認されるのを待ちます。
    await txn.wait();
    console.log("Minted NFT #1");
// makeAnEpicNFT 関数をもう一度呼び出します。NFT がまた Mint されます。
    txn = await nftContract.makeAnEpicNFT();
// Minting が仮想マイナーにより、承認されるのを待ちます。
    await txn.wait();
    console.log("Minted NFT #2");
};
// エラー処理を行っています。
(async () => {
    try {
        await newMain();
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
export {}