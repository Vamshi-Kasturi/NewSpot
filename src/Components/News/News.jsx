import { useEffect, useState, useCallback } from "react";
import "./News.css";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const totalArticles = 20;
  const newsAPI_APIkey = process.env.REACT_APP_API;

  const fetchNews = useCallback(async () => {
    const url = `https://api.thenewsapi.com/v1/news/top?api_token=${newsAPI_APIkey}&locale=in&language=en&categories=${props.category}&page=1`;
    const response = await fetch(url);
    const news = await response.json();
    setData(news.data || []);
    setPage(1);
  }, [newsAPI_APIkey, props.category]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    const url = `https://api.thenewsapi.com/v1/news/top?api_token=${newsAPI_APIkey}&locale=in&language=en&categories=${props.category}&page=${nextPage}`;
    const response = await fetch(url);
    const news = await response.json();
    setData((prev) => prev.concat(news.data || []));
    setPage(nextPage);
  };

  return (
    <div className="news-bg">
      <div className="news-place">
        <div className="heading">
          <h2>
            NewSpot - Today{" "}
            {props.category.charAt(0).toUpperCase() +
              props.category.slice(1)}{" "}
            headlines
          </h2>
        </div>

        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={data.length < totalArticles}
          loader={<Spinner />}
        >
          <div className="news-items">
            {data.map((article) => (
              <NewsItem key={article.uuid} data={article} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}
