import { useContext, useEffect, useState } from "react";
import CommentInfo from "./CommentInfo"
import DeleteButton from "./DeleteButton"
import axios from "axios";
import { articleIdContext } from "../../contexts/Articleid";
import { userContext } from "../../contexts/User";

function CommentSection (){
  const [commentList, setCommentList] = useState([]);
  const {articleId,setArticleId} = useContext(articleIdContext);
  const {user,setUser} = useContext(userContext); 
  useEffect(()=>{
    if (articleId !== 0){
      axios.get(`https://backend-nc-news-i02g.onrender.com/api/articles/${articleId}/comments`)
      .then((responce)=>{
        setCommentList(responce.data.comments)
      })
      .catch((err)=>{console.log("my console log from my CATCH.",err)})
    }
  })
    return ( 
      <>
      {commentList.map((comment)=>{
      return (
        <div key={comment.comment_id}>
          <CommentInfo comment={comment}/>
          {user.username === comment.author ? <DeleteButton commentId={comment.comment_id}/> : null}
        </div>
      )
      })}
      </>
    )
  }

export default CommentSection