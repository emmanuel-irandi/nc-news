import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";
import FilteredPage from "./components/Homepage/FilteredPage";
import ArticlePage from "./components/Articlepage/ArticlePage";
import { UserProvider } from "./contexts/User";
import UserContainer from "./components/Sidebars/UserContainer";

function App() {
  return (
    <UserProvider>
    <UserContainer/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/:topic" element={<FilteredPage/>}/>
      <Route path="/article/:article" element={<ArticlePage/>}/>
    </Routes>
    </UserProvider>
  )
}

export default App
