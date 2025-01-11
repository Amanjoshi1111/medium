
import { useParams } from "react-router-dom";
import { InitialCircle } from "../components/InitialCircle";
import { useState } from "react";
import { Blog as BlogType, useBlog } from "../hooks/useBlog";
import Loader from "../components/Loader";



export default function Blog() {

    const { id } = useParams();
    const { loading, blog }: { loading: boolean, blog: BlogType | undefined } = useBlog({ id });

    if (loading) {
        return <Loader />
    }

    if (blog == null) {
        return <div>
            No such blog found
        </div>
    }


    return <div className="flex flex-row min-h-screen">
        <div className="flex flex-col w-full md:w-2/3  p-20 text-left">
            <div className="font-extrabold text-5xl">{blog.title}</div>
            <div className="py-5 font-normal text-gray-500">Posted on August 24, 2024</div>
            <div>{blog.content}</div>
        </div>
        <div className="flex flex-col w-0 md:w-1/3 bg-gray-100 invisible md:visible p-20">
            <div className="pb-2 text-normal font-normal">Author</div>
            <div className="flex items-center space-x-3">
                <InitialCircle initial={blog.author.name?.[0]?.toUpperCase()} />
                <div>
                    <div className="font-bold text-2xl">{`${blog.author.name?.[0].toUpperCase()}${blog.author.name?.slice(1)}`}</div>
                    <div className="text-sm text-gray-500">{blog.author.email}</div>
                </div>
            </div>
        </div>
    </div>
}