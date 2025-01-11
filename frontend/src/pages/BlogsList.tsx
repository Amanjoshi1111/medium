import BlogCard, { BlogCardProps } from "../components/BlogCard";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import SwitchList from "../components/SwitchList";
import useBlogs from "../hooks/getBlogs";


export function BlogList() {

    const { loading, blogs } = useBlogs();

    if (loading) {
        return <>
        <Loader/>
        </>
    }

    return <>
        <div className="w-full flex flex-col px-32">
            <Navbar />
            <div className="px-10">
                <SwitchList />
                {
                    blogs.map((blog: any) => <BlogCard id={blog.id} key={blog.id} title={blog.title} content={blog.content} authorName={blog.authorName} publishedData={blog?.publishedData} />)
                }
                {
                    // Array.from({ length: 10 }).map((_, i) => <BlogCard key={i} />)
                }
            </div>

        </div>
    </>

}