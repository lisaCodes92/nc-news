import { getStaticContextFromError } from "@remix-run/router";
import { useState } from "react";

const CommentAdder = (props) => {
    const [newComment, setNewComment] = useState({
          {
    body: 
    votes: 0,
    author: ,
    created_at: Date.now(),
  },
    })

    const commentToAdd = () => {
        setNewComment()
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.setComments((currComments) => {
            return [{newComment}, ...currComments];
       })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button onClick={commentToAdd}>Add Comment</button>
        </form>
    )
}

export default CommentAdder;