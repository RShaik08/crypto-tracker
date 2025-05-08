import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePrices } from "../redux/cryptoSlice";
import './CryptoTable.css'; // Import the CSS file

const CryptoTable = () => {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.crypto.assets);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePrices());
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const formatChange = (change) => {
    const color = change >= 0 ? "green" : "red";
    return <span style={{ color }}>{change}%</span>;
  };

  const renderSimpleChart = (data) => {
    if (!data || !Array.isArray(data) || data.length < 2) {
      return <div>No Chart Data</div>;
    }

    const minPrice = Math.min(...data);
    const maxPrice = Math.max(...data);
    const priceRange = maxPrice - minPrice;

    return (
      <div style={{ display: 'flex', alignItems: 'flex-end', height: '30px', width: '80px' }}>
        {data.map((price, index) => (
          <div
            key={index}
            style={{
              width: `${80 / data.length}px`,
              height: priceRange === 0 ? '50%' : `${((price - minPrice) / priceRange) * 80 + 20}%`,
              backgroundColor: index === data.length - 1 ? 'blue' : (price > data[Math.max(0, index - 1)] ? 'lightgreen' : 'lightcoral'),
              marginLeft: index > 0 ? '1px' : '0',
              borderRadius: '1px 1px 0 0',
            }}
          ></div>
        ))}
      </div>
    );
  };
  return (
    <div className="crypto-table-container">
      <h2>Real-Time Crypto Price Tracker</h2>
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={asset.id}>
              <td>{index + 1}</td>
              <td><img src={asset.logo} alt={asset.name} width={30} className="crypto-logo" /></td>
              <td>{asset.name}</td>
              <td>{asset.symbol}</td>
              <td>${asset.price.toFixed(2)}</td>
              <td>{formatChange(asset.percent_change_1h)}</td>
              <td>{formatChange(asset.percent_change_24h)}</td>
              <td>{formatChange(asset.percent_change_7d)}</td>
              <td>{asset.market_cap}</td>
              <td>{asset.volume_24h}</td>
              <td>{asset.circulating_supply}</td>
              <td>{asset.max_supply ? asset.max_supply : 'N/A'}</td>
              <td>{renderSimpleChart(asset.sevenDayChartData)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;