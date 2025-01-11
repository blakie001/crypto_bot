import Crypto from "../models/Crypto.js";

export const getStats = async(req, res) =>{
    const coin = req.query.coin;
    if(!coin) {
        return res.status(400).json("Query Perimeter Not Found");
    }
    try {
        const latestData = await Crypto.findOne({ coin: coin });
        if(!latestData) {
            return res.status(404).json("No Data Found For Coin : ", coin);
        }
        // console.log(latestData)
        return res.status(200).json({
            price: latestData.price,
            marketCap: latestData.marketCap,
            "Change in 24h": latestData.change24h,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json("Interval Server Error");
    }
}