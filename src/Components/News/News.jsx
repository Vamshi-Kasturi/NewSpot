import { useEffect, useState, useCallback } from "react";
import "./News.css";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner";
import SkeletonCard from "../Skeleton/SkeletonCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNews } from "../../context/NewsContext";
import { getMockArticlesForCategory } from "../../data/mockNews";
import { useSearchParams } from "react-router-dom";

export default function News({ category = "general", pageSize = 9, isSaved = false }) {
  const { country, bookmarks } = useNews();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingFallback, setUsingFallback] = useState(false);

  const newsAPI_APIkey = process.env.REACT_APP_API;

  const fetchNews = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setUsingFallback(false);

    // If viewing saved articles, load from context
    if (isSaved) {
      setData(bookmarks);
      setIsLoading(false);
      return;
    }

    try {
      let url = "";
      if (searchQuery) {
        url = `https://api.thenewsapi.com/v1/news/all?api_token=${newsAPI_APIkey}&search=${encodeURIComponent(
          searchQuery
        )}&language=en&page=1&limit=${pageSize}`;
      } else {
        url = `https://api.thenewsapi.com/v1/news/top?api_token=${newsAPI_APIkey}&locale=${country}&language=en&categories=${category}&page=1&limit=${pageSize}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }

      const news = await response.json();

      if (news.error) {
        throw new Error(news.error.message || "API error occurred");
      }

      const articles = news.data || [];
      if (articles.length === 0) {
        // Fallback if API returned empty
        const fallback = getMockArticlesForCategory(category);
        setData(fallback);
        setUsingFallback(true);
        setTotalArticles(fallback.length);
      } else {
        setData(articles);
        setTotalArticles(news.meta?.found || articles.length * 2);
      }
      setPage(1);
    } catch (err) {
      console.warn("News API fetch failed, switching to curated fallback:", err.message);
      setError(err.message);
      const fallback = getMockArticlesForCategory(category);
      setData(fallback);
      setUsingFallback(true);
      setTotalArticles(fallback.length);
    } finally {
      setIsLoading(false);
    }
  }, [newsAPI_APIkey, country, category, searchQuery, isSaved, bookmarks, pageSize]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const fetchMoreData = async () => {
    if (isSaved || usingFallback) return;

    const nextPage = page + 1;
    try {
      let url = "";
      if (searchQuery) {
        url = `https://api.thenewsapi.com/v1/news/all?api_token=${newsAPI_APIkey}&search=${encodeURIComponent(
          searchQuery
        )}&language=en&page=${nextPage}&limit=${pageSize}`;
      } else {
        url = `https://api.thenewsapi.com/v1/news/top?api_token=${newsAPI_APIkey}&locale=${country}&language=en&categories=${category}&page=${nextPage}&limit=${pageSize}`;
      }

      const response = await fetch(url);
      if (!response.ok) return;

      const news = await response.json();
      const newArticles = news.data || [];

      if (newArticles.length === 0) {
        setTotalArticles(data.length);
        return;
      }

      setData((prev) => [...prev, ...newArticles]);
      setPage(nextPage);
    } catch (err) {
      console.error("Failed to load more news:", err);
    }
  };

  // Compute title
  let headingTitle = `Today's ${category.charAt(0).toUpperCase() + category.slice(1)} Headlines`;
  if (isSaved) {
    headingTitle = "Saved Articles";
  } else if (searchQuery) {
    headingTitle = `Search Results for "${searchQuery}"`;
  }

  return (
    <main className="news-bg">
      <div className="news-place">
        {/* Header section with category title and stats */}
        <div className="news-header-section">
          <div className="heading">
            <h2>{headingTitle}</h2>
            <p className="news-subtitle">
              {isSaved
                ? `You have ${bookmarks.length} saved article${bookmarks.length === 1 ? "" : "s"}`
                : `Verified stories curated from top world news sources`}
            </p>
          </div>

          {usingFallback && (
            <div className="fallback-notice">
              <i className="fa-solid fa-circle-info"></i>
              <span>Live API daily quota reached. Showing curated stories for you.</span>
            </div>
          )}
        </div>

        {/* Loading Skeletons */}
        {isLoading ? (
          <div className="news-items">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : data.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">
              <i className={isSaved ? "fa-regular fa-bookmark" : "fa-solid fa-magnifying-glass"}></i>
            </div>
            <h3>{isSaved ? "No saved articles yet" : "No articles found"}</h3>
            <p>
              {isSaved
                ? "Click the bookmark icon on any news card to save stories for later reading."
                : "Try adjusting your search terms or selecting another category."}
            </p>
          </div>
        ) : (
          <InfiniteScroll
            dataLength={data.length}
            next={fetchMoreData}
            hasMore={!isSaved && !usingFallback && data.length < totalArticles}
            loader={<Spinner />}
            endMessage={
              data.length > 0 && (
                <div className="scroll-end-message">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>You're all caught up with the latest headlines!</span>
                </div>
              )
            }
          >
            <div className="news-items">
              {data.map((article, index) => (
                <NewsItem
                  key={article.uuid || `${article.url || "article"}-${index}`}
                  data={article}
                />
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </main>
  );
}
