import { getComments } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import CommentAdder from './CommentAdder'

const Comments = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [comments, setComments] = useState([]);
    const {article_id} = useParams();
    
    useEffect(() => {
        setIsLoading(true);
        getComments(article_id).then(({comments}) => {
            setComments(comments);
            setIsLoading(false);
        })
    }, [])

    if (isLoading) return <p>Loading....</p>;

    return (
        
        <ul className="comment-list">
            <h2>Comments</h2>
            <CommentAdder setComments={setComments} article_id={article_id} />
            {comments.map((comment) => {
               return <CommentCard key={comment.created_at} comment={comment} />
            })}
            </ul>
    )
}

export default Comments;