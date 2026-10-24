import React, { useState } from "react";
import "./NewsItem.css";
import { assets } from "../../assets/img";
import { useNews } from "../../context/NewsContext";
import { formatTimeAgo, estimateReadTime } from "../../utils/formatters";

export default function NewsItem({ data }) {
  const { isBookmarked, toggleBookmark } = useNews();
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (!data) return null;

  const bookmarked = isBookmarked(data);
  const formattedTime = formatTimeAgo(data.published_at);
  const readTime = estimateReadTime(data.description || data.snippet || data.title);

  // Handle broken or empty images safely
  const imageUrl = !imageError && data.image_url ? data.image_url : assets.DefaultNews;

  const handleShare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const shareUrl = data.url || window.location.href;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(data.title + " " + shareUrl)}`, "_blank");
    }
  };

  const handleBookmarkClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(data);
  };

  return (
    <article className="news-card">
      {/* Card Media Header */}
      <div className="card-media">
        <img
          src={imageUrl}
          alt={data.title || "News article"}
          onError={() => setImageError(true)}
          loading="lazy"
        />
        {/* Source Badge */}
        <span className="source-badge">
          <i className="fa-regular fa-newspaper"></i>
          {data.source || "News"}
        </span>

        {/* Card Action Overlay Buttons */}
        <div className="card-actions-overlay">
          <button
            type="button"
            className={`action-btn bookmark-btn ${bookmarked ? "bookmarked" : ""}`}
            onClick={handleBookmarkClick}
            title={bookmarked ? "Remove Bookmark" : "Save for Later"}
            aria-label="Bookmark article"
          >
            <i className={bookmarked ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"}></i>
          </button>
          <button
            type="button"
            className="action-btn share-btn"
            onClick={handleShare}
            title={copied ? "Link Copied!" : "Share Article"}
            aria-label="Share article"
          >
            <i className={copied ? "fa-solid fa-check" : "fa-solid fa-share-nodes"}></i>
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="news-content">
        <div className="news-meta-top">
          <span className="news-date">
            <i className="fa-regular fa-clock"></i> {formattedTime}
          </span>
          <span className="dot-separator">•</span>
          <span className="news-read-time">
            <i className="fa-regular fa-bookmark"></i> {readTime}
          </span>
        </div>

        <h3 className="news-title" title={data.title}>
          {data.title || "Headline currently unavailable"}
        </h3>

        <p className="news-desc">
          {data.description
            ? data.description.length > 150
              ? `${data.description.slice(0, 150)}...`
              : data.description
            : data.snippet
            ? `${data.snippet.slice(0, 150)}...`
            : "No description provided. Click below to read the complete article on the publisher's website."}
        </p>

        {/* Card Footer with Read More button */}
        <div className="card-footer">
          <a
            href={data.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="read-more-btn"
          >
            <span>Read full story</span>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </article>
  );
}
