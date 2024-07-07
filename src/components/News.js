import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);
    const API_KEY = '1314f4e590ff4d23b464b0c7c5c92e8d';
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
        return <div>{error}</div>;
    }

    if (!news.length) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h3>Top News Headlines</h3>
            <ul>
                {news.map((article, index) => (
                    <li key={index}>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                        <p>{article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default News;
