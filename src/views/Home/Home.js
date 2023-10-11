import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import NewsArticle from "../../component/NewsArticle/NewsArticle";


function Home() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("nagpur");

  const loadNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-09-10&sortBy=publishedAt&apiKey=979491a286344d55af49dee6cec71444`
      );
      setNews(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  useEffect(() => {
    loadNews();
  }, [searchQuery]);
  return (
    <>
      <nav class="navbar navbar-dark bg-dark text-light">
        <h3 className="text-center">News App🗞️</h3>
        <form class="form-inline">
          <input
           className="text-center-search"
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            aria-label="Search"
          />
        </form>
      </nav>

      <div className="news-container mt-3">
        {news.map((newsArticles, index) => {
          const {
            author,
            title,
            description,
            url,
            urlToImage,
            publishedAt,
            content,
          } = newsArticles;
          return (
            <NewsArticle
              author={author}
              title={title}
              description={description}
              url={url}
              urlToImage={urlToImage}
              publishedAt={publishedAt}
              content={content}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;