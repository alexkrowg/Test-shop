import React from "react";
import "./Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>
            <a href="#navbar" className="logo-name">
              Logo/Name
            </a>
          </h1>
        </div>
        <div className="nav-items">
          <h2>
            <a href="#navbar">New </a>
          </h2>
          <h2>
            <a href="#navbar">Boys</a>
          </h2>
          <h2>
            <a href="#navbar">Girls</a>
          </h2>
        </div>
        <div className="nav-basket">
          <form action="/" method="get" className="nav-search">
            <input
              type="text"
              id="nav-input"
              placeholder="Search"
              className="search-input"
            ></input>
            <label className="search-icon">
              <SearchIcon />
            </label>
          </form>
          <a href="#navbar" className="account-icon">
            <AccountCircleIcon />
          </a>
          <a href="#navbar" className="shopping-cart-icon">
            <ShoppingCartIcon />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
