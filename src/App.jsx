import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";
import FilteredPage from "./components/Homepage/FilteredPage";
import ArticlePage from "./components/Articlepage/ArticlePage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/:topic" element={<FilteredPage/>}/>
      <Route path="/article/:article" element={<ArticlePage/>}/>
    </Routes>
    </>
  )
}

export default App
