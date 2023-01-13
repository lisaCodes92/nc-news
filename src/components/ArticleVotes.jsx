import { useState } from "react";
import { patchArticle } from "../utils/api";


const Voting = ({votes, articleId}) => {
    const [voteUpdate, setVoteUpdate] = useState(0);
    const [hasVoted, setHasVoted] = useState(false);

    const upVote = () => {
        setVoteUpdate((currVoteUpdate) => currVoteUpdate + 1);
        setHasVoted(true);
        patchArticle(articleId, 1).catch((err) => {
            setVoteUpdate((currVoteUpdate) => currVoteUpdate - 1);
            console.log(err);
        })
    }

    const downVote = () => {
        setVoteUpdate((currVoteUpdate) => currVoteUpdate - 1);
        setHasVoted(true);
        patchArticle(articleId, -1).catch((err) => {
            setVoteUpdate((currVoteUpdate) => currVoteUpdate + 1);
            console.log(err);
        })
    }

    if (hasVoted) return (
        <section id='vote-count'>
            <p>Votes {votes + voteUpdate}</p>
            <div id="vote-buttons"> 
            </div>
        </section>
    )

    return (
        <section id='vote-count'>
            <p>Votes {votes + voteUpdate}</p>
            <div id="vote-buttons">
            <button id='upvote' onClick={upVote}>👍</button>
            <button id='downvote' onClick={downVote}>👎</button>
            </div>
        </section>
    )
}

export default Voting;