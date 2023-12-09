import hre from "hardhat";
import lighthouse from "@lighthouse-web3/sdk";

function generateRandomButValidEthereumAddress() {
  return "0x" + Math.random().toString(16).substr(2, 40);
}

const dummyAccounts: `0x${string}`[] = [
  "0x6eA4Ea5c3cD5c1f77F9D2114659cBaCAeA97EdB7",
  "0x2a029BdBef262F1095320a3b8e0013143D441cE2",
  "0x12F95747e78c6044a7cBb4670195103a660cfA47",
  "0xF7a01Fc1E57bbd2172Db3b47E4065C9Aa48Df1e2",
  "0x9693B29F43522a2b6aef7b64EA1980f10F21b1cc",
];

const nftsForContract1 = [
  {
    metadata: {
      name: "NFT1",
      description: "NFT1 description",
      image: "https://placekitten.com/300/300",
    },
    length: 100n,
    width: 200n,
    account: dummyAccounts[0],
  },
  {
    metadata: {
      name: "NFT2",
      description: "NFT2 description",
      image: "https://placekitten.com/300/300",
    },
    length: 55n,
    width: 100n,
    account: dummyAccounts[2],
  },
  {
    metadata: {
      name: "NFT3",
      description: "NFT3 description",
      image: "https://placekitten.com/300/300",
    },
    length: 110n,
    width: 340n,
    account: dummyAccounts[1],
  },
];

export async function uploadJSONtoIPFS(obj: any) {
  const res = await lighthouse.uploadBuffer(
    Buffer.from(JSON.stringify(obj), "utf-8"),
    process.env.LIGHTHOUSE_API_KEY || ""
  );
  return res.data;
}

async function main() {
  const nftContract1 = await hre.viem.deployContract("NFTContract1");
  const nftContract2 = await hre.viem.deployContract("NFTContract2");
  const nftContract3 = await hre.viem.deployContract("NFTContract3");
  const nftContract4 = await hre.viem.deployContract("NFTContract4");
  const nftContract5 = await hre.viem.deployContract("NFTContract5");
  const nftContract6 = await hre.viem.deployContract("NFTContract6");

  console.log("NFTContract1 deployed to:", nftContract1.address);
  console.log("NFTContract2 deployed to:", nftContract2.address);
  console.log("NFTContract3 deployed to:", nftContract3.address);
  console.log("NFTContract4 deployed to:", nftContract4.address);
  console.log("NFTContract5 deployed to:", nftContract5.address);
  console.log("NFTContract6 deployed to:", nftContract6.address);

  // mint some nfts for testing
  for (const nft of nftsForContract1) {
    const { Hash: cid } = await uploadJSONtoIPFS(nft.metadata);

    console.log(`Minting Land NFT for ${nft.account} with CID ${cid}`);

    await nftContract1.write.safeMint([
      nft.account,
      cid,
      nft.length,
      nft.width,
    ]);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
