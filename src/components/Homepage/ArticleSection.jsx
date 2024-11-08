import { useEffect, useState } from "react";
import PostInfo from "../Articlepage/PostInfo";
import UpvoteButton from "../Sharedcomps/UpvoteButton";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function ArticleSection ({topic}){
    const [articlesList, setArticlesList] = useState([]);
    const [queries,setQueries] = useSearchParams();
    const [err,setErr] = useState(null);
    useEffect(()=>{axios.get(`https://backend-nc-news-i02g.onrender.com/api/articles${topic ? `?topic=${topic}` : ""}`)
      .then((responce)=>{
        setArticlesList(responce.data.articles)
      })
      .catch((error)=>{
        console.log("my console log from my CATCH.",error)
        setErr("No articles found for this topic.")
      })
    })
    useEffect(()=>{
      setArticlesList((currentList)=>{
        const newArticles = [...currentList].sort((a,b)=>{
          return (a[queries.get("sort_by")] - b[queries.get("sort_by")])
        })
        return (queries.get("order") === "DESC") ? newArticles.reverse() : newArticles 
      })
    },[queries])
    return err ? <h1 style={{fontSize : "4em"}}>{err}</h1> : (
      <>
      {articlesList.map((article)=>{
        console.log(Math.random()*100)
        return (
          <div key={article.article_id}>
          <PostInfo article={article}/>
          <UpvoteButton articleId={article.article_id} votes={article.votes}/>
          </div>
        )
      })}
      </>
    )
  }

  export default ArticleSection