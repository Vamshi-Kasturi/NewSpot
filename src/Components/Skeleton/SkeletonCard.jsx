import React from "react";
import "./SkeletonCard.css";

export default function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image skeleton-shimmer"></div>
      <div className="skeleton-content">
        <div className="skeleton-line skeleton-title skeleton-shimmer"></div>
        <div className="skeleton-line skeleton-title-short skeleton-shimmer"></div>
        <div className="skeleton-line skeleton-desc skeleton-shimmer"></div>
        <div className="skeleton-line skeleton-desc skeleton-shimmer"></div>
        <div className="skeleton-meta">
          <div className="skeleton-line skeleton-badge skeleton-shimmer"></div>
          <div className="skeleton-btn skeleton-shimmer"></div>
        </div>
      </div>
    </div>
  );
}
