import mongoose from "mongoose";

const cryptoSchema = mongoose.Schema({
    coin: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    marketCap: {
        type: Number,
        require: true
    },
    change24h: {
        type: Number,
        require: true,
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("Crypto", cryptoSchema);