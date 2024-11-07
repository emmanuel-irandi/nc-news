import { useEffect, useState } from "react";
import PostInfo from "../Articlepage/PostInfo";
import UpvoteButton from "../Sharedcomps/UpvoteButton";
import CommentsButton from "./CommentsButton";
import axios from "axios";

function ArticleSection (){
    const [articlesList, setArticlesList] = useState([]);
    useEffect(()=>{axios.get("https://backend-nc-news-i02g.onrender.com/api/articles")
      .then((responce)=>{
        setArticlesList(responce.data.articles)
      })
      .catch((err)=>{console.log("my console log from my CATCH.",err)})
    })
    return (
      <>
      {articlesList.map((article)=>{
        return (
          <div key={article.article_id}>
          <PostInfo article={article}/>
          <CommentsButton/>
          <UpvoteButton/>
          </div>
        )
      })}
      </>
    )
  }

  export default ArticleSection