import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css"
// import newsArticle from "../../component/NewsArticle/NewsArticle";
export default function Home() {
  const [news, setNews] = useState([])
  const loadNews = async () => {
    const response = await axios.get("https://newsapi.org/v2/everything?q=pune&from=2023-09-30&to=2023-09-30&sortBy=popularity&apiKey=926deb960338402fbdf5f96a1d09a363");
    setNews(response.data.articles)
  }
  useEffect(() => {
    loadNews()
  }, [])
  return (
    <div>
      <h1>News App</h1>
      {
        news.map((newsArticle, index) => {
          const { author, title, description, url, urlToImage, PublishedAt, content } = newsArticle
          return (
            <newsArticle author={author} title={title} description={description} url={url} urlToImage={urlToImage} publishAt={PublishedAt} content={content} key={index} />)
        })}
    </div>
  )
}