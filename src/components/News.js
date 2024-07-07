import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css'; 

const News = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);
    const API_KEY = '44f6accc985d470abbd911ffdf26044b';
    const COUNTRY = 'in'; 

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`);
                setNews(response.data.articles.slice(0, 5));
            } catch (err) {
                setError('Failed to fetch news');
            }
        };

        fetchNews();
    }, [API_KEY, COUNTRY]);

    const handleNewsClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="news-container">
            <h3>Top News Headlines</h3>
            {error && <div className="error-message">{error}</div>}
            <div className="news-list">
                {news.map((article, index) => (
                    <div key={index} className="news-card" onClick={() => handleNewsClick(article.url)}>
                        <h4>{article.title}</h4>
                        <p className="news-source">{article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
