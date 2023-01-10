import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { useParams } from "react-router-dom";

const Articles = () => {
    const [isloading, setIsLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const { topic_slug } = useParams()
    
    useEffect(() => {
        setIsLoading(true);
        getArticles(topic_slug).then(({ articles }) => {
            setArticles(articles);
            setIsLoading(false);
        })
    }, [topic_slug])

    if (isloading) return <p>'Loading....'</p>;

    return (
        <ul className="article-list">
            {articles.map((article) => (
                <li className="article-card" key={article.article_id}>
                    <p id="title">{article.title}</p>
                    <p id="author">Written By: {article.author}</p>
                    <p>Votes: { article.votes }</p>
                </li>
            ))}
        </ul>
    )
}

export default Articles;