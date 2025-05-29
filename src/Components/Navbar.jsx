import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">
          <Link to="/">Crypto App</Link>
        </h1>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/exchanges" className="nav-link">Exchanges</Link>
          </li>
          <li>
            <Link to="/coin" className="nav-link">Coins</Link>
          </li>
          <li>
            <Link to="/faq" className="nav-link">FAQ</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
