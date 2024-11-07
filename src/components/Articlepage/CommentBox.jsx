import axios from "axios";
import { useContext, useState } from "react"
import { articleIdContext } from "../../contexts/Articleid";
import { userContext } from "../../contexts/User";


function CommentBox (){
  const [commentDraft,setCommentDraft] = useState("");
  const {articleId,setArticleId} = useContext(articleIdContext);
  const {user,setUser} = useContext(userContext);
  const [err,setErr] = useState(null)
  function postComment (event){
    event.preventDefault()
    axios.post(`https://backend-nc-news-i02g.onrender.com/api/articles/${articleId}/comments`,{username : user.username, body : commentDraft})
    .catch((error)=>{
      setErr("comment not posted")
      console.log(error)
    })
    setCommentDraft("")
  }
    return (
      <>
      <form onSubmit={postComment}>
        <input placeholder="write your comment here..." 
        size={100} value={commentDraft} onChange={(event)=>setCommentDraft(event.target.value)}
        type="text"
        />
        <input type="submit" value="Post"/>
      </form>
      {err ? <p>{err}</p> : null}
      </>
    )
  }

  export default CommentBox