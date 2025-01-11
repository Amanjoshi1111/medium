import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

interface BlogData {
    title: string,
    content: string
}

export default function CreateBlog() {

    const [blogData, setBlogData] = useState<BlogData>({
        title: "",
        content: ""
    })
    const navigate = useNavigate();

    function submitBlog() {
        axios.post(`${BACKEND_URL}/api/v1/blog`, blogData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res=> {
            const {id} = res.data;
            navigate(`/blog/${id}`);
        }).catch(err=> {
            if(err.status == 401){
                navigate("/signin");
                return;
            }
            alert(err.message);
        })
    }

    return (
        <div className="px-20">
            <div className="fixed top-0 left-0 w-full px-32 z-10 bg-white">
                <Navbar />
            </div>
            <div className="pt-20 px-32">
                <div className="flex h-20 items-center space-x-2 fixed w-full left-0 px-56">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="size-16 flex-shrink-0" onClick={submitBlog}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <input className="all-unset border-l p-4 text-6xl flex-1 focus:outline-none placeholder:text-gray-400 overflow-hidden" type="text" placeholder="Title" onChange={(e) => {
                        setBlogData({
                            ...blogData,
                            title: e.target.value
                        })
                    }} />
                    {/* <div className="border-2 pl-2 text-5xl grow">Title</div> */}
                </div>
                <div className="px-24 py-2 pt-24 overflow-y-scroll">
                    <textarea name="" id="" className="all-unset placeholder:text-gray-400 w-full h-screen resize-none px-2 text-xl focus:outline-none" placeholder="Tell your story..." onChange={(e) => {
                        setBlogData({
                            ...blogData,
                            content: e.target.value
                        })
                    }}></textarea>
                </div>
            </div>
        </div>
    );
}

