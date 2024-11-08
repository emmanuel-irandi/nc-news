import { useState } from "react"
import DropDownButton from "../Sharedcomps/DropDownButton"
import SortByOption from "./SortByOption"
import { useSearchParams } from "react-router-dom";

function SortByMenu (){
    const [queries,setQueries] = useSearchParams();
    const [order,setOrder] = useState(queries.get("order")==="ASC")
    return (
        <>
        <DropDownButton>
        <SortByOption option="created_at" name="date"/>
        <SortByOption option="votes" name="popular"/>
        </DropDownButton>
        <button onClick={()=>{
            setOrder((currentOrder)=>!currentOrder)
            setQueries((currentQueries)=>{
                const queriesCopy = new URLSearchParams(currentQueries)
                queriesCopy.set("order", order ? "DESC" : "ASC")
                return queriesCopy
              })
            }}>
        {order ? "↑" : "↓"}
        </button>
        </>
    )
}

export default SortByMenu