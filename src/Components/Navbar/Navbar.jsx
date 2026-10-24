import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/img";
import { Link, useNavigate } from "react-router-dom";
import { useNews } from "../../context/NewsContext";

export default function Navbar() {
  const { theme, toggleTheme, country, setCountry, countries, bookmarks } = useNews();
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const d = new Date();
  const todayDate = d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchInput.trim();
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const clearSearch = () => {
    setSearchInput("");
  };

  return (
    <header className="main-nav">
      <nav>
        {/* Brand Logo */}
        <Link to="/" className="logo-link" title="NewSpot Home">
          <img className="logo" src={assets.LogoNav} alt="NewSpot Logo" />
        </Link>

        {/* Search Bar */}
        <form className="search-bar" onSubmit={handleSearchSubmit}>
          <button type="submit" className="search-btn" aria-label="Search">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </button>
          <input
            type="search"
            placeholder="Search news, topics, or keywords..."
            name="search"
            id="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          {searchInput && (
            <button
              type="button"
              className="clear-search-btn"
              onClick={clearSearch}
              aria-label="Clear search"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
        </form>

        {/* Actions & Meta */}
        <div className="nav-actions">
          {/* Country Selector */}
          <div className="country-select-wrapper" title="Select Country">
            <select
              className="country-select"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              aria-label="Select Country"
            >
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Bookmarks Icon */}
          <Link to="/saved" className="nav-btn bookmark-btn" title="Saved Bookmarks">
            <i className="fa-regular fa-bookmark"></i>
            {bookmarks.length > 0 && (
              <span className="bookmark-count">{bookmarks.length}</span>
            )}
          </Link>

          {/* Dark / Light Mode Toggle */}
          <button
            type="button"
            className="nav-btn theme-toggle"
            onClick={toggleTheme}
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-solid fa-sun"></i>
            )}
          </button>

          {/* Date Badge */}
          <div className="date-badge">
            <i className="fa-regular fa-calendar-days"></i>
            <span>{todayDate}</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
