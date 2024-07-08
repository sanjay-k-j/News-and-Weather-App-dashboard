import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css'; // Import the CSS file

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

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (!news.length) {
        return <div>Loading...</div>;
    }

    return (
        <div className="news-container">
            <h3>Top News Headlines</h3>
            <ul className="news-list">
                {news.map((article, index) => (
                    <li key={index} className="news-card" onClick={() => window.open(article.url, '_blank')}>
                        <h4>{article.title}</h4>
                        <p className="news-source">{article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default News;
