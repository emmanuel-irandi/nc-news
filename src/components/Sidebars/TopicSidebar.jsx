import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


function TopicSideBar () {
    const [topics,setTopics] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get("https://backend-nc-news-i02g.onrender.com/api/topics")
        .then((res)=>{
            setTopics(res.data.topics)
        })
        .catch(console.log)
    })
    return (
        <>
        <button key="home" onClick={()=>{
                navigate(`/`)
            }}>
                home
            </button>
            
        {topics.map((topic)=>{
            return (
            <button key={topic.slug} onClick={()=>{
                navigate(`/${topic.slug}`)
            }}>
                {topic.slug}
            </button>
            )
            })}
        </>
    )
}

export default TopicSideBar