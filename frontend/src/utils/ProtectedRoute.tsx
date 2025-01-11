import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

const ProtectedRoute = () => {
    const { setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/me`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(() => {
            setIsLoggedIn(true);
        }).catch((err) => {
            console.log(err);
            setIsLoggedIn(false);
            navigate("/signin");
        })
    }, []);

    return <Outlet />
}

export default ProtectedRoute;   