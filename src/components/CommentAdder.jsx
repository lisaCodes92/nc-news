import { postComment } from "../utils/api";
import { useState } from "react";

const CommentAdder = ({setComments, article_id}) => {
    const [commentBody, setCommentBody] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        postComment(commentBody, article_id, "tickle122").then((comment) => {
           setComments((currComments) => {
            return [comment, ...currComments];
       })
        });
        
       
    }

    return (
        <form onSubmit={handleSubmit} id='comment-adder'>
            <textarea type="text"
                value={commentBody}
                placeholder="Write a comment..."
                onChange={(e) => setCommentBody(e.target.value)}/>
            <button type="submit" onSubmit={handleSubmit}>Add Comment</button>
        </form>
    )
}

export default CommentAdder;