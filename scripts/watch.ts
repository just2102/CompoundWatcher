import { ethers } from "hardhat";
import compoundAbi from "../abi/Compound.json";
import axios from "axios";

const wbtc = "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f";
const minThreshhold = ethers.parseUnits("0.033", 8);

const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

async function sendTelegramMessage(message: string) {
  console.log("sending telegram message");
  const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
  const params = {
    chat_id: chatId,
    text: message,
  };

  try {
    await axios.post(url, params);
  } catch (error) {
    console.error("Error sending Telegram message:", error);
  }
}

async function main() {
  console.log("min threshhold", minThreshhold);
  const contract = new ethers.Contract(
    "0x9c4ec768c28520B50860ea7a15bd7213a9fF58bf",
    compoundAbi,
    ethers.provider
  );
  contract.on("WithdrawCollateral", (src, to, asset, amount) => {
    if (asset.toString() === wbtc && amount >= minThreshhold) {
      console.log(`SOMEONE WITHDREW MORE THAN ${minThreshhold} WBTC!`);
      sendTelegramMessage(`SOMEONE WITHDREW MORE THAN ${minThreshhold} WBTC!`);
    }
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
