import axios from "axios"
import { useState } from "react"


function DeleteButton ({commentId}){
  const [err,setErr] = useState(null)
  function deleteComment(){
    axios.delete(`https://backend-nc-news-i02g.onrender.com/api/comments/${commentId}`)
    .catch((error)=>{
      setErr("cannot delete comment.")
    })
  }
    return (
      <>
      <button onClick={deleteComment}>
        Delete
      </button>
      {err ? <p>{err}</p> : null}
      </>

    )
  }

export default DeleteButton