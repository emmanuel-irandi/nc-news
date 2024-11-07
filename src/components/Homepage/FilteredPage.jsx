import { useParams } from "react-router-dom"
import DropDownButton from "../Sharedcomps/DropDownButton"
import ArticleSection from "./ArticleSection"
import Title from "./Title"

function FilteredPage (){
  const {topic} = useParams()
    return (
      <>
      <Title topic={topic}/>
      <DropDownButton/>
      <ArticleSection topic={topic}/>
      </>
    )
  }

export default FilteredPage