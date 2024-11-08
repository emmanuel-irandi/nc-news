import { useState } from "react"


function DropDownButton ({children,buttonClass}){
  const [open,setOpen] = useState(false)
    return (
      <div>
      <button onClick={()=>setOpen((currentOpen)=>!currentOpen)}>
        {open ? "˄" : "˅"}
      </button>
      {open && children}
      </div>
    )
  }

export default DropDownButton