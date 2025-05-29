import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.css';

const Exchanges = () => {
  const [exchange, setExchange] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredExchanges, setFilteredExchanges] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/exchanges');
      setExchange(response.data);
      setFilteredExchanges(response.data); // Initialize filtered list
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = exchange.filter((ex) =>
      ex.name.toLowerCase().includes(value)
    );
    setFilteredExchanges(filtered);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`exchanges-container ${theme}`}>
      <header>
        <h1>🌟 Crypto Exchanges</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search exchanges..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <button onClick={toggleTheme} className="theme-toggle">
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
        </div>
      </header>
      <div className="exchange-list">
        {filteredExchanges.map((i) => (
          <div key={i.id} className="exchange-card">
            <a href={i.url} target="_blank" rel="noopener noreferrer">
              <div className="image-container">
                <img src={i.image} alt={`${i.name} logo`} />
              </div>
              <h2>{i.name}</h2>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exchanges;
