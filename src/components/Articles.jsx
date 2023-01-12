import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";

const Articles = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const { topic_slug } = useParams()
    
    useEffect(() => {
        setIsLoading(true);
        getArticles(topic_slug).then(({ articles }) => {
            setArticles(articles);
            setIsLoading(false);
        })
    }, [topic_slug])

    if (isLoading) return <p>'Loading....'</p>;

    return (
        <ul className="article-list">
            {articles.map((article) => (
                <ArticleCard key={article.article_id} article={article} />
            ))}
        </ul>
    )
}

export default Articles;