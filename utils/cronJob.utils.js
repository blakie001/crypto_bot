import axios from "axios";
import Crypto from "../models/Crypto.js";

export const cronJob = async () =>{
    const currentTime = new Date();
    console.log(`Cron Job Started At ${currentTime.toString()}`)

    // api :https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,matic-network,ethereum
    const coins = ["bitcoin", "matic-network", "ethereum"];
    const url = "https://api.coingecko.com/api/v3/simple/price";

    try {
        const { data } = await axios.get(url, {
            params: {
                ids: coins.join(','),
                vs_currencies: 'usd',
                include_market_cap: true,
                include_24hr_change: true,
            }
        })
        const records = coins.map((coin) =>({
            coin,
            price: data[coin].usd,
            marketCap: data[coin].usd_market_cap,
            change24h: data[coin].usd_24h_change,
        }))
        await Crypto.insertMany(records);

        console.log("Crypto Price Updated...");
    } catch (error) {
        console.log(error);
    }
}