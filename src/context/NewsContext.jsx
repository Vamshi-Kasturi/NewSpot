import React, { createContext, useContext, useState, useEffect } from "react";

const NewsContext = createContext();

export const useNews = () => useContext(NewsContext);

export const NewsProvider = ({ children }) => {
  // Theme state: dark / light
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("newspot_theme") || "light";
  });

  // Country locale state
  const [country, setCountry] = useState(() => {
    return localStorage.getItem("newspot_country") || "in";
  });

  // Bookmarked articles state
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem("newspot_bookmarks");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Search query state
  const [searchQuery, setSearchQuery] = useState("");

  // Sync theme with DOM and localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("newspot_theme", theme);
  }, [theme]);

  // Sync country with localStorage
  useEffect(() => {
    localStorage.setItem("newspot_country", country);
  }, [country]);

  // Sync bookmarks with localStorage
  useEffect(() => {
    localStorage.setItem("newspot_bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const isBookmarked = (article) => {
    if (!article) return false;
    const identifier = article.uuid || article.url;
    return bookmarks.some((item) => (item.uuid || item.url) === identifier);
  };

  const toggleBookmark = (article) => {
    if (!article) return;
    const identifier = article.uuid || article.url;
    setBookmarks((prev) => {
      const exists = prev.some((item) => (item.uuid || item.url) === identifier);
      if (exists) {
        return prev.filter((item) => (item.uuid || item.url) !== identifier);
      } else {
        return [article, ...prev];
      }
    });
  };

  const countries = [
    { code: "in", name: "India", flag: "🇮🇳" },
    { code: "us", name: "United States", flag: "🇺🇸" },
    { code: "gb", name: "United Kingdom", flag: "🇬🇧" },
    { code: "ca", name: "Canada", flag: "🇨🇦" },
    { code: "au", name: "Australia", flag: "🇦🇺" },
  ];

  return (
    <NewsContext.Provider
      value={{
        theme,
        toggleTheme,
        country,
        setCountry,
        countries,
        bookmarks,
        isBookmarked,
        toggleBookmark,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
