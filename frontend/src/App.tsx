import { BrowserRouter, Navigate, Route, Routes, } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Blog from "./pages/Blog"
import CreateBlog from "./pages/CreateBlog"
import { BlogList } from "./pages/BlogsList"
import { AuthProvider } from "./context/authContext"
import ProtectedRoute from "./utils/ProtectedRoute"
import PublicRoute from "./utils/PublicRoutes"



function App() {

    return <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route element={<ProtectedRoute />}>
                    <Route path="/blog/:id" element={<Blog />} />
                    <Route path="/blogs" element={<BlogList />} />
                    <Route path="/createBlog" element={<CreateBlog />} />
                </Route>
                <Route element={<PublicRoute />}>
                    <Route path="/" element={<Navigate to="/signin" replace />} />.
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin" element={<Signin />} />
                </Route>
            </Routes>
        </AuthProvider>
    </BrowserRouter>
}

export default App;
