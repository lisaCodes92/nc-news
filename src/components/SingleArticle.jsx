import './SingleArticle.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../utils/api';
import Comments from "./Comments";
import Voting from './ArticleVotes';




const SingleArticle = () => {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { article_id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        getArticleById(article_id).then((requestedArticle) => {
            setArticle(requestedArticle);
            setIsLoading(false);
        })
    }, [article_id])

    if (isLoading) return <p>'Loading....'</p>;

    return (
        <main className='single-article'>
            <h2 id='article-title'>{article.title}</h2>
            <h3 id='article-author'> Written by: {article.author}</h3>
            <p id='article-body'>{article.body}</p>
            <Voting articleId={article.article_id} votes={article.votes} />
            <Comments />
        </main>
      
    )

}

export default SingleArticle;