import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css'; // Import the CSS file

const News = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);
    const API_URL = 'https://hn.algolia.com/api/v1/search?tags=front_page';

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(API_URL);
                const topFiveNews = response.data.hits.slice(0, 5).map(article => ({
                    title: article.title,
                    url: article.url,
                    source: article.author,
                    publishedAt: article.created_at,
                }));
                setNews(topFiveNews);
            } catch (err) {
                console.error('Error fetching news:', err);
                setError('Failed to fetch news');
            }
        };

        fetchNews();
    }, []);

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
                        <p className="news-source">{article.source} - {new Date(article.publishedAt).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default News;
