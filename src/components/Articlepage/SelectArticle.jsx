import axios from "axios";
import UpvoteButton from "../Sharedcomps/UpvoteButton"
import PostInfo from "./PostInfo"
import { useContext, useEffect, useState } from "react";
import { articleIdContext } from "../../contexts/Articleid";

function SelectArticle (){
    const [selectArticle, setSelectArticle] = useState({title : undefined ,author : undefined,body : undefined,created_at : undefined,votes : 0});
    const [votes,setVotes] = useState(0)
    const {articleId,setArticleId} = useContext(articleIdContext);
    useEffect(()=>{
      if (articleId !== 0){
        axios.get(`https://backend-nc-news-i02g.onrender.com/api/articles/${articleId}`)
        .then((responce)=>{
          console.log(responce.data)
          setSelectArticle(()=>{
            setVotes(responce.data.article_id[0].votes)
            return responce.data.article_id[0]
          })
        })
        .catch((err)=>{console.log("my console log from my CATCH.",err)})
      } 
    }, [articleId])
    return (
      <>
      <PostInfo article={selectArticle} linkTitle={false}/>
      <UpvoteButton articleId={articleId} votes={votes}/>
      </>
    )
  }

export default SelectArticle