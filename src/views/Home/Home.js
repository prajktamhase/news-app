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
        `https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-10-10&to=2023-10-10&sortBy=popularity&apiKey=5fb059a92803433aac471c22a544ad3e
        `
      );
      setNews(response.data.articles);
      console.log(response.data.articles)
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
 
      <nav>
        <h3 className="text-center">News App</h3>
        <form >
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
      <div className="news-container">

        
          {news.map((article, index) => {
          console.log(article);
          const {
            author,
            title,
            description,
            url,
            urlToImage,
            publishedAt,
          } = article;

          return (
            <div className="news-card" >
           
            <NewsArticle
              author={author}
              title={title}
              description={description}
              url={url}
              urlToImage={urlToImage}
              publishedAt={publishedAt}
            />
              </div>
          
          );
        })}
      </div>
    
      
    </>
  );
}
export default Home;