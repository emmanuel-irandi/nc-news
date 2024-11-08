import { useParams } from "react-router-dom"
import ArticleSection from "./ArticleSection"
import Title from "./Title"
import SortByMenu from "./SortByMenu"

function FilteredPage (){
  const {topic} = useParams()
    return (
      <>
      <Title topic={topic}/>
      <SortByMenu/>
      <ArticleSection topic={topic}/>
      </>
    )
  }

export default FilteredPage