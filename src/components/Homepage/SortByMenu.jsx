import { useState } from "react"
import DropDownButton from "../Sharedcomps/DropDownButton"
import SortByOption from "./SortByOption"
import { useSearchParams } from "react-router-dom";

function SortByMenu (){
    const [order,setOrder] = useState(false)
    const [queries,setQueries] = useSearchParams();
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