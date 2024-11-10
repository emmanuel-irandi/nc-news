import axios from "axios";
import { useEffect, useState } from "react"


function UpvoteButton ({articleId,votes}){
  const [count,setCount] = useState(votes);
  const [err,setErr] = useState(null);
  const [isLiked,setIsLiked] = useState(false);
  function upVote(){
    setCount((currentCount)=>currentCount+(!isLiked? 1 : -1))
    setIsLiked((liked)=>!liked)
    setErr(null)
    axios.patch(`https://backend-nc-news-i02g.onrender.com/api/articles/${articleId}`,{inc_votes : (!isLiked? 1 : -1)})
    .catch((err)=>{
      console.log(`this is my console log from the upvote button catch:`,err)
      setCount((currentCount)=>currentCount-(!isLiked? 1 : -1))
      setErr("error occured with your vote.")
    })
  }
    return (
      <>
     <button onClick={upVote} className="upvote-button">
      {count}
     </button>
      {err ? <p>{err}</p> : null}
     </>
    )
  }

export default UpvoteButton