import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function useBlogs() {

    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);
    const { setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then((res) => {
                setBlogs(res.data.posts);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                if (err.status == 401) {
                    setIsLoggedIn(false);
                    navigate("/login");
                } else {
                    alert(err.message);
                }

            })
    }, []);

    return {
        loading,
        blogs
    }
}