import { useEffect, useState } from "react";
import "./News.css";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [totalArticles, setTotalArticles] = useState(0);
  const [page, setPage] = useState(1);
  let totalArticles = 20;

  let newsAPI_APIkey = process.env.REACT_APP_API;

  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://api.thenewsapi.com/v1/news/top?api_token=${newsAPI_APIkey}&locale=in&language=en&categories=${props.category}&page=1`;
      setLoading(true);
      const response = await fetch(url);
      const news = await response.json();
      console.log(news.data);
      setData(news.data);
      // setTotalArticles(news.totalArticles);
      setLoading(false);
    };
    fetchNews();
  }, [props.category]);

  const fetchMoreData = async () => {
    let nextPage = page + 1;
    let url = `https://api.thenewsapi.com/v1/news/top?api_token=${newsAPI_APIkey}&locale=in&language=en&categories=${props.category}&page=${nextPage}`;
    setPage(nextPage);
    setLoading(true);
    const response = await fetch(url);
    const news = await response.json();
    // setData(data.concat(news.data));
    setData((prev) => prev.concat(news.data));
    setLoading(false);
    // setTotalArticles(news.totalArticles);
  };

  return (
    <>
      <div className="news-bg">
        <div className="news-place">
          <div className="heading">
            <h2>
              NewSpot - Today{" "}
              {props.category.charAt(0).toUpperCase() + props.category.slice(1)}{" "}
              headlines{" "}
            </h2>
          </div>
          {/* <div className="loading-div">
            {loading && <Spinner />}
          </div> */}

          <InfiniteScroll
            dataLength={data.length}
            next={fetchMoreData}
            hasMore={data.length < totalArticles}
            loader={<Spinner />}
          >
            <div className="news-items">
              {data.length > 0 &&
                data.map((article) => (
                  <NewsItem key={article.uuid} data={article} />
                ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
}
