import { createContext, useEffect, useState } from "react";
import { users } from "../exampleUsers";

export const userContext = createContext({})

export function UserProvider({children}){
    const [user,setUser] = useState({}); 
    useEffect(()=>{
        setUser(users[Math.floor(Math.random()*users.length)])
    })
    return (
        <userContext.Provider value={{user,setUser}}>
            {children}
        </userContext.Provider>
    )
}

