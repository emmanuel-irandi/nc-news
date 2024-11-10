import moment from "moment";
import { Link } from "react-router-dom";

function PostInfo ({article,linkTitle = true}){
    return (
      <div key={article.article_id}>
      {linkTitle ? <Link style={{textDecoration : "none"}} to={`article/${article.article_id}`}>
      <div className="article"> 
        <div className="body">
          <div className="header-bar">
            {article.author + " • " + moment(article.created_at).fromNow()}
          </div>
          <h3>{article.title}</h3>
          {article.body}
          <img src={article.article_img_url} alt={article.title} />
        </div>
      </div>
      </Link> : <div className="article"> 
        <div className="body">
          <div className="header-bar">
            {article.author + " • " + moment(article.created_at).fromNow()}
          </div>
          <h3>{article.title}</h3>
          {article.body}
          <img src={article.article_img_url} alt={article.title} />
        </div>
      </div>}
      </div>
    )
  }

export default PostInfo