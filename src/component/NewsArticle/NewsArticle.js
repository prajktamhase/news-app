import React from "react";
import "./NewsArticle.css"
export default function NewsArticle({author, title, description, url, urlToImage, publishedAt}) {
    
    return (
        <>
            <div>
                <img src={urlToImage} className="news-image" />
                <h1>{title}</h1>
                <h3>{author}</h3>
                <p>{description}</p>
                <h5>{publishedAt}</h5>
                <a href={url} target="blank">Read More</a>
            </div>
        </>
    )
}