import React from "react";
import "./Ticker.css";

const trendingHeadlines = [
  "Global Climate Accord signed with $200B clean energy commitment",
  "High-speed rail corridor cuts regional transit times by 65%",
  "Open Source AI models match multi-billion proprietary benchmarks",
  "Photonic quantum computing milestone achieved at room temperature",
  "Market indices surge as cooling inflation boosts investor confidence"
];

export default function Ticker() {
  return (
    <div className="ticker-wrapper">
      <div className="ticker-badge">
        <span className="live-dot"></span>
        <span>BREAKING</span>
      </div>
      <div className="ticker-track-container">
        <div className="ticker-track">
          {[...trendingHeadlines, ...trendingHeadlines].map((headline, idx) => (
            <span key={idx} className="ticker-item">
              <span className="ticker-bullet">•</span> {headline}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
