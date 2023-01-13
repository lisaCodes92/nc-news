
const CommentCard = ({ comment }) => {
   

    return (
         <li className="comment-card" >
            <p> Votes {comment.votes}</p>
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            
        </li>
    )
}

export default CommentCard;