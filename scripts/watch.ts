import { ethers } from "hardhat";
import compoundAbi from "../abi/Compound.json";

const wbtc = "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f";
const minThreshhold = ethers.parseUnits("0.00001", 8);

async function main() {
  console.log("min threshhold", minThreshhold);
  const contract = new ethers.Contract(
    "0x9c4ec768c28520B50860ea7a15bd7213a9fF58bf",
    compoundAbi,
    ethers.provider
  );
  contract.on("WithdrawCollateral", (src, to, asset, amount) => {
    amount = ethers.toBigInt(amount);
    if (asset === wbtc && amount >= minThreshhold) {
      console.log(`SOMEONE WITHDREW MORE THAN ${minThreshhold} WBTC!`);
    }
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
