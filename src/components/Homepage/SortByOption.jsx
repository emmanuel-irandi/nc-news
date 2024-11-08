import { useSearchParams } from "react-router-dom";

function SortByOption ({option,name}){
  const [queries,setQueries] = useSearchParams();
    return (
      <button onClick={()=>setQueries((currentQueries)=>{
        const queriesCopy = new URLSearchParams(currentQueries)
        queriesCopy.set("sort_by", option)
        return queriesCopy
      })}>
        {name}
      </button>
    )
  }

export default SortByOption