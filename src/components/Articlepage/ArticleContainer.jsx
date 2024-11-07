import { useContext, useEffect } from "react"
import { articleIdContext} from "../../contexts/Articleid"
import CommentBox from "./CommentBox"
import CommentSection from "./CommentSection"
import SelectArticle from "./SelectArticle"

function ArticleContainer ({article}) {
  const {articleId,setArticleId} = useContext(articleIdContext);
  useEffect(()=>{
      setArticleId(article)
  },[article])
    return (
        <>
      <SelectArticle/>
      <hr />
      <CommentBox/>
      <CommentSection/>
        </>
    )
  }

  export default ArticleContainer