import hre from "hardhat";
import lighthouse from "@lighthouse-web3/sdk";

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
      image:
        "https://lh4.googleusercontent.com/i90Qyf6AtAzu-418-2DHCxauOgAAmbzhBH5SsgC6cMVVn2lc4StXT0rF4Q_Wb_JqWtPtMgj7L5Akffhoot6KPMhKgl2QDRWMBQMRRqCvAWRo_n1YHj2pLrVVDMgAovy-gOGy4wNwlvRL6ViCJEddD3w",
    },
    length: 100n,
    width: 200n,
    account: dummyAccounts[0],
  },
  {
    metadata: {
      name: "NFT2",
      description: "NFT2 description",
      image:
        "https://www.arweave.net/TF-JRdNRHosV_1ygEjhL1NOnFq4fvPoakxITdoLEdW4?ext=png",
    },
    length: 55n,
    width: 100n,
    account: dummyAccounts[2],
  },
  {
    metadata: {
      name: "NFT3",
      description: "NFT3 description",
      image:
        "https://nftnewspro.com/wp-content/uploads/2023/03/metaverse-will-have-greenhouse-and-garden-filled-with-NFT-flowers-1.jpg",
    },
    length: 110n,
    width: 340n,
    account: dummyAccounts[1],
  },
];

const nftsForContract2 = [
  {
    metadata: {
      name: "NFT4",
      description: "NFT4 description",
      image:
        "https://brightnode.io/wp-content/uploads/2022/06/NFT-Art-scaled.jpg",
    },
    account: dummyAccounts[0],
  },
  {
    metadata: {
      name: "NFT5",
      description: "NFT5 description",
      image:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-01/220103-hong-kong-sothebys-immersive-art-nft-ac-556p-692326.jpg",
    },
    account: dummyAccounts[2],
  },
  {
    metadata: {
      name: "NFT6",
      description: "NFT6 description",
      image:
        "https://live-production.wcms.abc-cdn.net.au/cbe346eee79d3e08dee5e8eb04284438?impolicy=wcms_crop_resize&cropH=1680&cropW=2983&xPos=17&yPos=574&width=862&height=485",
    },
    account: dummyAccounts[1],
  },
];

const nftsForContract3 = [
  {
    metadata: {
      name: "NFT7",
      description: "NFT7 description",
      image:
        "https://miro.medium.com/v2/resize:fit:1024/1*Pz6UfdHqksWwJoAbDKK5CA.jpeg",
    },
    numberOfSignUps: 4,
    account: dummyAccounts[0],
  },
  {
    metadata: {
      name: "NFT8",
      description: "NFT8 description",
      image:
        "https://www.theskimm.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6g4gfm8wk7b6%2F2UdeEPwgRsUMfqNOv66Phj%2Fa1d09157561be8e444ee198dd1f691ec%2FMental_Health_in_the_Holidays_Artwork.jpg&w=3840&q=75",
    },
    numberOfSignUps: 5,
    account: dummyAccounts[2],
  },
  {
    metadata: {
      name: "NFT9",
      description: "NFT9 description",
      image:
        "https://highlandspringshealth.com/wp-content/uploads/2020/06/Signs-of-Depression-in-Men_Feature.png0",
    },
    numberOfSignUps: 10,
    account: dummyAccounts[1],
  },
];

const nftsForContract4 = [
  {
    metadata: {
      name: "NFT10",
      description: "NFT10 description",
      image:
        "https://preview.redd.it/m2uje37qyaj71.jpg?auto=webp&s=dac7af4dc84503a4777890e3fd420d72e068d84e",
    },
    account: dummyAccounts[0],
    roommate: dummyAccounts[3],
  },
  {
    metadata: {
      name: "NFT11",
      description: "NFT11 description",
      image:
        "https://www.arweave.net/hCW3BAbQGEQrF-bYC3Q_sSadCcyb0XxSdOMFU6GrqEU?ext=PNG",
    },
    account: dummyAccounts[2],
    roommate: dummyAccounts[2],
  },
  {
    metadata: {
      name: "NFT12",
      description: "NFT12 description",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/0bc0fb108815039.5fc63eb54480d.png",
    },
    account: dummyAccounts[1],
    roommate: dummyAccounts[4],
  },
];

const nftsForContract5 = [
  {
    metadata: {
      name: "NFT13",
      description: "NFT13 description",
      image:
        "https://assets-global.website-files.com/6241bcd9e666c1514401461d/62f9c86328edfc87a67759f7_Gothic-Crusaders-NFTMintRadar.png",
    },
    account: dummyAccounts[0],
    opened: true,
    tokenId: 0n,
  },
  {
    metadata: {
      name: "NFT14",
      description: "NFT14 description",
      image:
        "https://mintspace-media.fra1.digitaloceanspaces.com/wp-content/uploads/2021/11/23140628/5D472F9B-CF63-494E-9AE9-D6E1D748DE48-1.png",
    },
    account: dummyAccounts[2],
    opened: false,
    tokenId: 1n,
  },
  {
    metadata: {
      name: "NFT15",
      description: "NFT15 description",
      image:
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/crusader-knight-kneel-filip-kelekidis.jpg",
    },
    account: dummyAccounts[1],
    roommate: dummyAccounts[4],
    opened: false,
    tokenId: 2n,
  },
];

const nftsForContract6 = [
  {
    metadata: {
      name: "NFT16",
      description: "NFT16 description",
      image:
        "https://images.saatchiart.com/saatchi/1870278/art/9888471/8951399-JQFPRBQW-7.jpg",
    },
    account: dummyAccounts[0],
    drunk: true,
    tokenId: 0n,
  },
  {
    metadata: {
      name: "NFT17",
      description: "NFT17 description",
      image:
        "https://w0.peakpx.com/wallpaper/196/643/HD-wallpaper-bull-digital-art-lines-animal.jpg",
    },
    account: dummyAccounts[2],
    drunk: false,
    tokenId: 1n,
  },
  {
    metadata: {
      name: "NFT18",
      description: "NFT18 description",
      image:
        "https://m.media-amazon.com/images/I/61kvw0qQfxL._AC_UF1000,1000_QL80_.jpg",
    },
    account: dummyAccounts[1],
    roommate: dummyAccounts[4],
    drunk: false,
    tokenId: 2n,
  },
];

export async function uploadJSONtoIPFS(obj: any) {
  const res = await lighthouse.uploadBuffer(
    Buffer.from(JSON.stringify(obj), "utf-8"),
    process.env.LIGHTHOUSE_API_KEY || ""
  );
  return res.data;
}

async function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

async function main() {
  const nftContract1 = await hre.viem.deployContract("NFTContract1");
  await wait(1000);
  const nftContract2 = await hre.viem.deployContract("NFTContract2");
  await wait(1000);
  const nftContract3 = await hre.viem.deployContract("NFTContract3");
  await wait(1000);
  const nftContract4 = await hre.viem.deployContract("NFTContract4");
  await wait(1000);
  const nftContract5 = await hre.viem.deployContract("NFTContract5");
  await wait(1000);
  const nftContract6 = await hre.viem.deployContract("NFTContract6");
  await wait(1000);

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
    await wait(1000);
  }

  for (const nft of nftsForContract2) {
    const { Hash: cid } = await uploadJSONtoIPFS(nft.metadata);

    console.log(`Minting Land NFT for ${nft.account} with CID ${cid}`);

    await nftContract2.write.safeMint([nft.account, cid]);
    await wait(1000);
  }

  let j = 0;

  for (const nft of nftsForContract3) {
    const { Hash: cid } = await uploadJSONtoIPFS(nft.metadata);

    console.log(`Minting Land NFT for ${nft.account} with CID ${cid}`);

    await nftContract3.write.safeMint([nft.account, cid]);
    await wait(1000);

    for (let i = 0; i < nft.numberOfSignUps; i++) {
      await nftContract3.write.signUp([BigInt(j)]);
      await wait(1000);
    }

    j++;
  }

  for (const nft of nftsForContract4) {
    const { Hash: cid } = await uploadJSONtoIPFS(nft.metadata);

    console.log(`Minting Land NFT for ${nft.account} with CID ${cid}`);

    await nftContract4.write.safeMint([nft.account, cid, nft.roommate]);
    await wait(1000);
  }

  for (const nft of nftsForContract5) {
    const { Hash: cid } = await uploadJSONtoIPFS(nft.metadata);

    console.log(`Minting Land NFT for ${nft.account} with CID ${cid}`);

    await nftContract5.write.safeMint([nft.account, cid]);
    await wait(1000);

    if (nft.opened) {
      await nftContract5.write.open([nft.tokenId]);
      await wait(1000);
    }
  }

  for (const nft of nftsForContract6) {
    const { Hash: cid } = await uploadJSONtoIPFS(nft.metadata);

    console.log(`Minting Land NFT for ${nft.account} with CID ${cid}`);

    await nftContract6.write.safeMint([nft.account, cid]);
    await wait(1000);

    if (nft.drunk) {
      await nftContract6.write.drink([nft.tokenId]);
      await wait(1000);
    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
