import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import SwitchList from "../components/SwitchList";

export function BlogList() {
    return <>
        <div className="w-full flex flex-col px-32">
            <Navbar />
            <div className="px-10">
                <SwitchList/>
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>

        </div>
    </>

}