import React from "react";
import "./Filters.css";
import { NavLink, useLocation } from "react-router-dom";
import { useNews } from "../../context/NewsContext";

const categories = [
  { name: "All News", path: "/", icon: "fa-solid fa-earth-americas" },
  { name: "Business", path: "/business", icon: "fa-solid fa-briefcase" },
  { name: "Technology", path: "/tech", icon: "fa-solid fa-laptop-code" },
  { name: "Sports", path: "/sports", icon: "fa-solid fa-futbol" },
  { name: "Entertainment", path: "/entertainment", icon: "fa-solid fa-film" },
  { name: "Health", path: "/health", icon: "fa-solid fa-heart-pulse" },
  { name: "Science", path: "/science", icon: "fa-solid fa-flask" },
  { name: "Saved", path: "/saved", icon: "fa-solid fa-bookmark" },
];

export default function Filters() {
  const location = useLocation();
  const { bookmarks } = useNews();

  return (
    <div className="filters-container">
      <div className="filters-scroll">
        <ul className="filter-items">
          {categories.map((cat) => {
            const isAllNews = cat.path === "/";
            const isActive = isAllNews
              ? location.pathname === "/" || location.pathname === "/general"
              : location.pathname === cat.path;

            return (
              <li key={cat.path}>
                <NavLink
                  to={cat.path}
                  className={`filter-link ${isActive ? "active" : ""}`}
                >
                  <i className={`${cat.icon} filter-icon`}></i>
                  <span>{cat.name}</span>
                  {cat.path === "/saved" && bookmarks.length > 0 && (
                    <span className="saved-pill-count">{bookmarks.length}</span>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
