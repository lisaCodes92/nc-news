import { useState } from "react";
import { patchArticle } from "../utils/api";


const Voting = ({votes, articleId}) => {
    const [voteUpdate, setVoteUpdate] = useState(0);
    const [hasUpVoted, setHasUpVoted] = useState(false);
    const [hasDownVoted, setHasDownVoted] = useState(false);
    
     
    const castVote = (vote) => {
        console.log(vote)
        setVoteUpdate((currVoteUpdate) => currVoteUpdate + vote);
        patchArticle(articleId, vote).catch((err) => {
            setVoteUpdate((currVoteUpdate) => currVoteUpdate - vote);
            alert("Sorry that didn't work...");
        })
    }

   
 
    return (
        <section id='vote-count'>
            <p>Votes {votes + voteUpdate}</p>
            <div id="vote-buttons">

                {hasUpVoted ? <button id='upvote' disabled>👍</button> : 
                    <button id='upvote' onClick={() => {
                        setHasUpVoted(true);
                        setHasDownVoted(false);
                        castVote(1);
                    }}>👍</button>}
                
                {hasDownVoted ? <button id='upvote' disabled>👎</button> :
                    <button id='downvote' onClick={() => {
                        setHasUpVoted(false);
                        setHasDownVoted(true);
                        castVote(-1);
                    }}>👎</button>}            
            </div>
        </section>
    )
}

export default Voting;