# Arbitrum WBTC Compound Watcher

## This bot watches for changes in the Compound USDC pool. Specifically, for withdrawals of WBTC

#### In the future it will monitor any network and any pool, depending on the settings

### How to use it?

#### 0. Copy this repo and create a .env file in the root directory

#### 1. Go to BotFather (search BotFather in Telegram) and create a new bot

#### 2. Copy the token and paste it into the .env file. <TELEGRAM_BOT_TOKEN>

#### 3. Start a chat with your new bot or send it any message

#### 4. Open a browser and go to https://api.telegram.org/bot<Your-BOT-Token>/getUpdates

#### 5. You'll see a JSON response where you can find your chat_id. Add it to the .env file (<TELEGRAM_CHAT_ID>)

#### 6. RUN THE SCRIPT VIA npx hardhat run scripts/watch.ts --network arbitrum
