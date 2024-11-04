import { NavLink } from "react-router-dom"
import "./components.css"

const Navbar = () => {
  return (
    <nav>
    <NavLink to={"/"} className="logo"  >

      <img src="https://cdn.iconscout.com/icon/free/png-256/free-shopping-cart-442-1151214.png?f=webp" alt="" />
      <h2>Retail Auto Bundling</h2>
    </NavLink>
    <ul>
    <li>  
    <NavLink to={"/"} acti>
      Product Bundling

      </NavLink>
    </li>
    <li>
      <NavLink to={"/forecasting"}>
        Forecasting
      </NavLink>
    </li>
    <li>
      <NavLink to={"/history"}>
History
      </NavLink>
    </li>
    </ul>
    </nav>
  )
}

export default Navbar