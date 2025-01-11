import { useEffect } from "react";
import { useAuth } from "../context/authContext"
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

const PublicRoute = () => {
    const { setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            setIsLoggedIn(false);
            navigate("/signin");
            return;
        }
        axios.get(`${BACKEND_URL}/api/v1/me`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(() => {
            setIsLoggedIn(true);
            navigate('/blogs');
        }).catch((err) => {
            console.log(err);
            setIsLoggedIn(false);
            navigate("/signin");
        })
    }, [])

    return <Outlet />
}

export default PublicRoute;