import { InitialCircle } from "./InitialCircle"
import codeImage from "../assets/code.jpg";
import { useNavigate } from "react-router-dom";

export interface BlogCardProps {
    id: string,
    authorName: string,
    title: string,
    content: string,
    publishedData: string | "2 min ago"
}

export default function BlogCard({
    id,
    authorName,
    title,
    content,
    publishedData
}: BlogCardProps) {

    const navigate = useNavigate();

    function goToBlog(){
        navigate(`/blog/${id}`);
    }

    return <div className="flex py-10 border-b  justify-between">
        <div className="flex flex-col space-y-3 w-full lg:w-2/3 cursor-pointer" onClick={goToBlog}>
            <div className="flex space-x-2 items-center">
                <InitialCircle initial="h" />
                <div className="font-medium">{authorName}</div>
                <div className="text-gray-500">{`${Math.ceil(content.length / 100)} min read`}</div>
            </div>
            <div className="font-bold text-4xl">{title}</div>
            <div className="text-justify">{(content.length > 100) ? content.slice(0, 100) + "..." : content}</div>
            <div className="flex justify-between items-center py-5">
                <div className="flex space-x-3 items-center">
                    <div className="px-3 py-1 bg-gray-200 text-gray-700 cursor-pointer rounded-3xl hover:bg-gray-500 hover:text-white">Side Hustle</div>
                    <div className="text-gray-500">3 min read</div>
                </div>
                <div className="flex space-x-5 [&>*]:cursor-pointer [&>*]:text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6  hover:text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6  hover:text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                </div>
            </div>
        </div>
        <div className="hidden lg:flex  items-center flex-1 justify-center">
            <div className="flex justify-center items-center  overflow-hidden">
                <img src={codeImage} alt="image" className="object-cover object-center  w-40 h-48 scale-125" />
            </div>
        </div>
    </div>
}