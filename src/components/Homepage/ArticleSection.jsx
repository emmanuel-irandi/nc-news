import { useEffect, useState } from "react";
import PostInfo from "../Articlepage/PostInfo";
import UpvoteButton from "../Sharedcomps/UpvoteButton";
import CommentsButton from "./CommentsButton";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <PostInfo/>
      {articlesList.map((article)=>{
        return (
          <p key={article.article_id}>
            <br/>
            <Link to={`article/${article.article_id}`}> 
            {article.title}
            </Link>
            <br/>
            {article.author}
            <br/>
            {article.body}
            {article.created_at}
            <br/>
            {article.votes}
          </p>
        )
      })}
      <CommentsButton/>
      <UpvoteButton/>
      </>
    )
  }

  export default ArticleSection