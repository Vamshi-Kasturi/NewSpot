import React from "react";
import "./NewsItem.css";
import { Link } from "react-router-dom";

export default function NewsItem(props) {
  const d = new Date(props.data.published_at);
  const uploadDate = d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div>
      <div className="news-card">
        <p className="badge">{props.data.source}</p>
        <img className={props.data.image_url? "" : "no-img"} src={props.data.image_url? props.data.image_url : "No image Available"} alt="Not available" />
        <div className="news-content">
          <h4>{props.data.title ? (props.data.title).slice(0,77) + "..." : "No title available"}</h4>
          <p>{props.data.description ? (props.data.description).slice(0,188) + "...": "No description available"}...</p>
          <div className="news-details">
            <p className="author-time"> {props.data.source || "Unknown"}  ● {uploadDate}</p>
          </div>
        </div>
        <Link target="_blank" to={ props.data.url || "/"}> Read more</Link>
      </div>
    </div>
  );
}
