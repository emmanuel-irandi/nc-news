import { createContext, useState } from "react";

export const articleIdContext = createContext(0)

export function ArticleIdProvider({children}){
    const [articleId,setArticleId] = useState(0); 
    return (
        <articleIdContext.Provider value={{articleId,setArticleId}}>
            {children}
        </articleIdContext.Provider>
    )
}