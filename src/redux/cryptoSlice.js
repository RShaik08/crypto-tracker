import { createSlice } from "@reduxjs/toolkit";
import cryptoData from "../assets/cryptoData.json";

const generateSample7dData = () => {
  const basePrice = Math.random() * 1000; // Some base price
  const dataPoints = [];
  for (let i = 0; i < 7; i++) {
    const change = (Math.random() * 0.2 - 0.1) * basePrice; // Small random change
    dataPoints.push(+(basePrice + change).toFixed(2));
  }
  return dataPoints;
};

const initialState = {
  assets: cryptoData.map(asset => ({
    ...asset,
    sevenDayChartData: generateSample7dData(),
  })),
};

const getUpdatedData = (assets) => {
  return assets.map((coin) => {
    const priceChange = (Math.random() * 2 - 1).toFixed(2);
    const newPrice = +(coin.price * (1 + priceChange / 100)).toFixed(2);
    const new7dData = coin.sevenDayChartData.slice(1); // Shift data
    new7dData.push(+(newPrice * (1 + (Math.random() * 0.1 - 0.05))).toFixed(2)); // Add new point

    return {
      ...coin,
      price: newPrice,
      percent_change_1h: +(coin.percent_change_1h + parseFloat(priceChange)).toFixed(2),
      percent_change_24h: +(coin.percent_change_24h + parseFloat(priceChange)).toFixed(2),
      percent_change_7d: +(coin.percent_change_7d + parseFloat(priceChange)).toFixed(2),
      volume_24h: coin.volume_24h, // Keep original volume
      market_cap: coin.market_cap, // Keep original market cap
      circulating_supply: coin.circulating_supply, // Keep original circulating supply
      max_supply: coin.max_supply, // Keep original max supply
      sevenDayChartData: new7dData,
    };
  });
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updatePrices: (state) => {
      state.assets = getUpdatedData(state.assets);
    },
  },
});

export const { updatePrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;