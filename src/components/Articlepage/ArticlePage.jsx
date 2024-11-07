import {ArticleIdProvider} from "../../contexts/Articleid"
import { useParams } from "react-router-dom"
import ArticleContainer from "./ArticleContainer"

function ArticlePage () {
  const {article} = useParams();
    return (
      <ArticleIdProvider>
      <ArticleContainer article={article}/>
      </ArticleIdProvider>
    )
  }

  export default ArticlePage