import Crypto from "../models/Crypto.js";

export const getDeviation = async(req, res) =>{
    const { coin } = req.query;
    if(!coin) {
        return res.status(400).json("Query Parameter Not Found");
    }

    try {
        const records = await Crypto.find({ coin }).sort({ timestamp: -1 }).limit(100);
        if(records.length === 0) {
            return res.status(404).json("No Rocord Found for :", coin);
        }

        const prices = records.map((record) => record.price);

        let sum = 0;
        for(var i = 0; i< prices.length; i++) {
            sum += prices[i];
        }
        
        const mean = sum/prices.length;

        let varianceSum = 0;
        for(var i = 0; i< prices.length; i++) {
            varianceSum += Math.pow(prices[i] - mean, 2);
        }

        const variance = varianceSum / prices.length;
        const deviation = Math.sqrt(variance);

        return res.status(200).json({
            deviation: parseFloat(deviation.toFixed(2))
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json("Interval Server Error");
    }
}