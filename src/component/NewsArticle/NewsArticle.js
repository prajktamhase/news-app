import React from "react";
import "./NewsArticle.css"
export default function NewsArticle(urlToImage, title, author, description, url, PublishedAt, content) {
    return (
        <>
           <div >
            <img src={urlToImage} className="news-image" />
            <h1>{title}</h1>
            <h3>{author}</h3>
            <p>{description}</p>
            <h5>{PublishedAt}</h5>
            <p>{content}</p>
            <a href={url} target="_blank">Read More</a>
        </div>
        </>
    )
}