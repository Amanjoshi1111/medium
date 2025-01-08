import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Blog from "./pages/Blog"
import CreateBlog from "./pages/CreateBlog"
import { BlogList } from "./pages/BlogsList"

function App() {

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/signin" replace />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/createBlog" element={<CreateBlog />} />
        </Routes>
    </BrowserRouter>
}

export default App
