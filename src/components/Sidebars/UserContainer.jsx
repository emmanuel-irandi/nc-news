import { useContext } from "react"
import { userContext } from "../../contexts/User"



function UserContainer (){
    const {user,setUser} = useContext(userContext)
    return (
        <span>
        <img src={user.avatar_url} alt="profile picture" height={40}/>
        <h3>{user.username}</h3>
        </span>
    )
}

export default UserContainer