import './SingleArticle.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../utils/api';



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
            <p id='vote-count'>Votes: {article.votes}</p>
            <button id='upvote'>Add Vote</button>
            
        </main>
      
    )

}

export default SingleArticle;