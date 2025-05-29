import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Coins = () => {
    const [coins, setCoins] = useState([]);
    const [currency, setCurrency] = useState('inr');
    const [page, setPage] = useState(1);
    const [theme, setTheme] = useState('light');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCoins, setFilteredCoins] = useState([]);
    const PageLimit = 10; // Number of coins to display per page

    useEffect(() => {
        fetchCoin();
    }, [currency, page]);

    useEffect(() => {
        // Filter coins based on the search term
        setFilteredCoins(
            coins.filter((coin) =>
                coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, coins]);

    const fetchCoin = async () => {
        try {
            const data = await axios(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&page=${page}&sparkline=false`
            );
            setCoins(data.data);
        } catch (error) {
            console.error('Network error: ', error);
        }
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme); // Toggle theme in the DOM
    };

    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); // Update search term on change
    };

    // Pagination Functions
    const goToNextPage = () => {
        setPage(page + 1);
    };

    const goToPreviousPage = () => {
        setPage(page - 1);
    };

    const goToFirstPage = () => {
        setPage(1);
    };

    const goToLastPage = () => {
        const totalPages = Math.ceil(coins.length / PageLimit);
        setPage(totalPages);
    };

    return (
        <div className={`coins-container`}>
            <div className="theme-toggle-container">
                <button className="theme-toggle" onClick={toggleTheme}>
                    Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
                </button>
                <div className="currency-select">
                    <label>
                        <input
                            type="radio"
                            name="currency"
                            value="inr"
                            checked={currency === 'inr'}
                            onChange={handleCurrencyChange}
                        />
                        INR
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="currency"
                            value="usd"
                            checked={currency === 'usd'}
                            onChange={handleCurrencyChange}
                        />
                        USD
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="currency"
                            value="eur"
                            checked={currency === 'eur'}
                            onChange={handleCurrencyChange}
                        />
                        EUR
                    </label>
                </div>
            </div>

            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for a coin..."
                    value={searchTerm}
                    onChange={handleSearchChange} // Handle search term changes
                />
            </div>

            <div className="coin-cards">
                {filteredCoins.length > 0 ? (
                    filteredCoins.map((coin) => (
                        <div className="coin-card" key={coin.id}>
                            <Link to={`/coin/${coin.id}`} className="coin-link">
                                <img src={coin.image} alt={coin.name} className="coin-image" />
                                <div className="coin-info">
                                    <div className="coin-symbol">{coin.symbol.toUpperCase()}</div>
                                    <div className="coin-name">{coin.name}</div>
                                    <div className="coin-price">{coin.current_price} {currency.toUpperCase()}</div>
                                </div>
                            </Link>
                        </div>
                    ))
                ) : (
                    <div>No coins found</div> // Message when no coins match search
                )}
            </div>

            {/* Pagination Controls */}
            <div className="pagination-info">
    <p>Pages {page} / {PageLimit}</p>
</div>

            <div className="pagination-container">
                <button
                    onClick={goToFirstPage}
                    disabled={page === 1}
                    className="pagination-btn"
                >
                    First Page
                </button>
                <button
                    onClick={goToPreviousPage}
                    disabled={page === 1}
                    className="pagination-btn"
                >
                    Previous
                </button>
                <button
                    onClick={goToNextPage}
                    disabled={filteredCoins.length < PageLimit}
                    className="pagination-btn"
                >
                    Next
                </button>
                <button
                    onClick={goToLastPage}
                    disabled={filteredCoins.length < PageLimit}
                    className="pagination-btn"
                >
                    Last Page
                </button>
            </div>
        </div>
    );
};

export default Coins;
