import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
   

    return (
         <li className="article-card" >
            <h2 id="title">{article.title}</h2>
            <p id="author">Written By: {article.author}</p>
            <p>Votes: {article.votes}</p>
            <button><Link to={`/articles/${article.article_id}`}>
                View
            </Link></button>
        </li>
    )
}

export default ArticleCard;