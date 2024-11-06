import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <>
    <HomePage/>
    {/* <br/>
    <FilteredPage/>
    <br/>
    <ArticlePage/> */}
    </>
  )
}

function HomePage (){
  return (
    <>
    <Title/>
    <DropDownButton/>
    <ArticleSection/>
    </>
  )
}

function Title (){
  return (
    <p>
      Title
    </p>
  )
}

function DropDownButton (){
  return (
    <>
    <SortByOption/>
    </>
  )
}

function SortByOption (){
  return (
    <p>
      SortByOption
    </p>
  )
}

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
          {article.title}
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

function CommentsButton (){
  return (
    <p>
      CommentsButton
    </p>
  )
}

function PostInfo (){
  return (
    <p>
      PostInfo
    </p>
  )
}

function UpvoteButton (){
  return (
    <p>
      UpvoteButton
    </p>
  )
}

function FilteredPage (){
  return (
    <>
    <Title/>
    <DropDownButton/>
    <ArticleSection/>
    </>
  )
}

function ArticlePage () {
  return (
    <>
    <SelectArticle/>
    <CommentSection/>
    <CommentBox/>
    </>
  )
}

function SelectArticle (){
  return (
    <>
    <PostInfo/>
    <UpvoteButton/>
    </>
  )
}

function CommentSection (){
  return (
    <>
    <DeleteButton/>
    <CommentInfo/>
    </>
  )
}

function DeleteButton (){
  return (
    <p>
      DeleteButton
    </p>
  )
}

function CommentInfo (){
  return (
    <p>
      CommentInfo
    </p>
  )
}

function CommentBox (){
  return (
    <p>
      CommentBox
    </p>
  )
}

export default App
