import React from 'react';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Crypto App</h1>
          <p className="hero-description">
            Stay ahead of the market with the latest crypto prices, trends, and insights.
          </p>
          <a href="/coin" className="cta-button">Explore Cryptos</a>
        </div>
      </section>

      {/* Featured Cryptocurrencies */}
      <section className="featured-cryptos">
        <h2 className="section-title">Popular Cryptocurrencies</h2>
        <div className="crypto-grid">
          <div className="crypto-card">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/12/02/57/bitcoin-2136339_640.png"
              alt="Bitcoin"
              className="crypto-image"
            />
            <h3 className="crypto-name">Bitcoin (BTC)</h3>
            <p className="crypto-info">Market leader with over $500B market cap.</p>
          </div>
          <div className="crypto-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDn0ojTITvcdAzMsfBMJaZC4STaDHzduleQ&s"
              alt="Ethereum"
              className="crypto-image"
            />
            <h3 className="crypto-name">Ethereum (ETH)</h3>
            <p className="crypto-info">Smart contracts and decentralized apps pioneer.</p>
          </div>
          <div className="crypto-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3_AejetAyECv4mv1h6aW5ExgtQ8V7PsUNDbQx01zmNg7dVofAHgchVZlITLUHlvRJesU&usqp=CAU"
              alt="Ripple"
              className="crypto-image"
            />
            <h3 className="crypto-name">Ripple (XRP)</h3>
            <p className="crypto-info">Trusted for cross-border payments.</p>
          </div>
        </div>
      </section>

      {/* Why Track Cryptocurrencies */}
      <section className="why-track">
  <h2 className="section-title" style={{color:'white'}}>Why Track Cryptocurrencies?</h2>
  <p className="section-description" style={{color:'white'}}>
    Cryptocurrencies are a fast-evolving market that impacts global finance and investment opportunities.
    Here’s why tracking them matters:
  </p>
  <ul className="why-track-list">
    <li>📊 <strong>Market Insights:</strong> Understand market trends and volatility to make informed decisions.</li>
    <li>💰 <strong>Investment Opportunities:</strong> Identify growth potential for higher returns.</li>
    <li>🌐 <strong>Global Economy:</strong> Cryptos are influencing economies worldwide; stay ahead of the curve.</li>
    <li>🚀 <strong>Adoption Trends:</strong> Track the adoption of blockchain technology and new crypto projects.</li>
  </ul>
</section>


      {/* Benefits for Traders and Beginners */}
      <section className="benefits">
  <h2 className="section-title" >Why Crypto App is Useful?</h2>
  <div className="benefits-grid">
    <div className="benefit-card">
      <h3>📈 For Traders</h3>
      <ul>
        <li>Real-time data for making better trade decisions.</li>
        <li>Price alerts to catch the best opportunities.</li>
        <li>Detailed analysis tools to optimize trading strategies.</li>
      </ul>
    </div>
    <div className="benefit-card">
      <h3>🧑‍🎓 For Beginners</h3>
      <ul>
        <li>Simple guides to understand crypto and blockchain.</li>
        <li>Insights into popular and emerging coins.</li>
        <li>User-friendly tools to track and learn without confusion.</li>
      </ul>
    </div>
    <div className="benefit-card">
      <h3>💰 For Long-Term Investors</h3>
      <ul>
        <li>Track historical performance of cryptocurrencies.</li>
        <li>Analyze growth trends for long-term planning.</li>
        <li>Access expert advice on building a strong portfolio.</li>
      </ul>
    </div>
  </div>
</section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2 className="section-title">Why Choose Crypto App?</h2>
        <p className="section-description">
          Crypto App is designed to empower users with accurate, real-time information and tools. Whether you're a seasoned trader or a curious beginner, we’ve got you covered.
        </p>
        <ul className="why-us-list">
          <li>✅ **Reliable Data:** We source data from trusted providers to ensure accuracy.</li>
          <li>✅ **User-Friendly Design:** An intuitive interface that’s easy to navigate.</li>
          <li>✅ **Community Support:** Join a growing community of crypto enthusiasts.</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Crypto App. Empowering Your Crypto Journey.</p>
      </footer>
    </div>
  );
};

export default Home;
