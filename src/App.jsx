import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";
import FilteredPage from "./components/Homepage/FilteredPage";
import ArticlePage from "./components/Articlepage/ArticlePage";
import { UserProvider } from "./contexts/User";
import UserContainer from "./components/Sidebars/UserContainer";
import TopicSideBar from "./components/Sidebars/TopicSidebar";

function App() {
  return (
    <UserProvider>
    <UserContainer/>
    <TopicSideBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/:topic" element={<FilteredPage/>}/>
      <Route path="/article/:article" element={<ArticlePage/>}/>
      <Route path="*" element={<h1 style={{fontSize : "6em"}}>404 not found</h1>}/>
    </Routes>
    </UserProvider>
  )
}

export default App
