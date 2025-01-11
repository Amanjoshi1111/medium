import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

interface AuthorData {
    id: string,
    email: string,
    name?: string,
    password: string
}

export interface Blog {
    id: string,
    title: string,
    content: string,
    pulished: boolean,
    authorId: string,
    author: AuthorData
}

export const useBlog = ({ id }: { id: string | undefined }) => {

    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    const { setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) => {
                setBlog(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                if(err.status == 401){
                    setIsLoggedIn(false);
                    navigate("/signin");
                }else {
                    alert(err.message);
                }
            })
    }, []);

    return {
        loading,
        blog
    }
}