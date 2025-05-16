# 📊 Crypto Stats API Server

This is the API server that:

- Stores real-time crypto data from CoinGecko.
- Serves two public endpoints:
  - `/stats`: Get the latest price, market cap, and 24h change %.
  - `/deviation`: Get the standard deviation of the price over the last 100 records.
- Subscribes to a background event (via NATS or similar message broker) to trigger data storage.

---

## 📦 Tech Stack

- **Node.js**
- **Express**
- **MongoDB**
  
---

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/blakie001/crypto_bot.git
cd api-server
