
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  import Chart from "./Chart";
 
  
  const CoinDetails = () => {
    const params = useParams();
    const [coin, setCoin] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currency, setCurrency] = useState("inr");
    const [days, setDays] = useState("24h");
    const [chartArray, setChartArray] = useState([]);
  
    const currencySymbol =
      currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  
    const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];
  
    const switchChartStats = (key) => {
      switch (key) {
        case "24h":
          setDays("24h");
          setLoading(true);
          break;
        case "7d":
          setDays("7d");
          setLoading(true);
          break;
        case "14d":
          setDays("14d");
          setLoading(true);
          break;
        case "30d":
          setDays("30d");
          setLoading(true);
          break;
        case "60d":
          setDays("60d");
          setLoading(true);
          break;
        case "200d":
          setDays("200d");
          setLoading(true);
          break;
        case "1y":
          setDays("365d");
          setLoading(true);
          break;
        case "max":
          setDays("max");
          setLoading(true);
          break;
  
        default:
          setDays("24h");
          setLoading(true);
          break;
      }
    };
  
    useEffect(() => {
      const fetchCoin = async () => {
        try {
          const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}`);
  
          const { data: chartData } = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
          );

          setCoin(data);
          setLoading(false)
          console.log(data)
          setChartArray(chartData.prices);
        } catch (error) {
          setError(true);
        }
      };
      fetchCoin();
    }, [params.id, currency,days]);
  
  
    return (
      <div className="coin-details-container">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {/* Chart Section */}
          <div className="chart-container">
            <Chart arr={chartArray} currency={currencySymbol} days={days} />
          </div>
    
          {/* Button Group */}
          <div className="button-group">
            {btns.map((i) => (
              <button
                disabled={days === i}
                key={i}
                onClick={() => switchChartStats(i)}
              >
                {i}
              </button>
            ))}
          </div>
    
          {/* Currency Selector */}
          <div className="currency-selector">
            <label>
              <input
                type="radio"
                name="Currency"
                value="inr"
                onChange={() => setCurrency("inr")}
              />
              INR
            </label>
            <label>
              <input
                type="radio"
                name="Currency"
                value="usd"
                onChange={() => setCurrency("usd")}
              />
              USD
            </label>
            <label>
              <input
                type="radio"
                name="Currency"
                value="eur"
                onChange={() => setCurrency("eur")}
              />
              EUR
            </label>
          </div>
    
          {/* Coin Details */}
          <div className="coin-details">
            <img src={coin.image.large} alt={coin.name} />
            <div className="coin-info">
              <p>{coin.name}</p>
              <p className="price">
                Price: {currencySymbol}
                {coin.market_data.current_price[currency]}
              </p>
              <p className="rank">Rank: #{coin.market_cap_rank}</p>
            </div>
          </div>
    
          {/* Stats Section */}
          <div className="stats">
            <p>
              Max Supply: <span>{coin.market_data.max_supply}</span>
            </p>
            <p>
              Circulating Supply: <span>{coin.market_data.circulating_supply}</span>
            </p>
            <p>
              Market Cap:{" "}
              <span>
                {currencySymbol}
                {coin.market_data.market_cap[currency]}
              </span>
            </p>
            <p>
              All Time Low:{" "}
              <span>
                {currencySymbol}
                {coin.market_data.atl[currency]}
              </span>
            </p>
            <p>
              All Time High:{" "}
              <span>
                {currencySymbol}
                {coin.market_data.ath[currency]}
              </span>
            </p>
            <p>
              Last Updated On:{" "}
              <span>{Date(coin.market_data.last_updated).split("G")[0]}</span>
            </p>
          </div>
        </>
      )}
    </div>
    
    
    );
  };
  

  
  export default CoinDetails;