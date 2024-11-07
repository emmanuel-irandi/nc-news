import { Link } from "react-router-dom";

function PostInfo ({article,linkTitle = true}){
    return (
      <div key={article.article_id}>
      <br/>
      {linkTitle ? <Link to={`article/${article.article_id}`}>
      {article.title}
      </Link> : <h3>{article.title}</h3>}
      <br/>
      {article.author}
      <br/>
      {article.body}
      {article.created_at}
      <br/>
      {article.votes}
    </div>
    )
  }

export default PostInfo