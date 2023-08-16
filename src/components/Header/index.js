import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />

      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/product" className="nav-link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/Carts" className="nav-link">
            Carts
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
