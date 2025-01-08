import { useState } from "react";
import { InitialCircle } from "../components/InitialCircle";

export default function Blog() {

    const [authorName,] = useState("Jockster");

    return <div className="flex flex-row min-h-screen">
        <div className="flex flex-col w-full md:w-2/3  p-20 text-left">
            <div className="font-extrabold text-5xl">Taxing Laughter</div>
            <div className="py-5 font-normal text-gray-500">Posted on August 24, 2024</div>
            <div className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, deserunt aspernatur eos a pariatur velit tenetur. Voluptate debitis quasi, incidunt inventore optio tenetur, deserunt sed enim, cum neque unde provident. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid reprehenderit dolorem quasi aspernatur repellendus libero laudantium eos! Repellendus laborum voluptatum non, eum voluptates eius, molestias suscipit hic ipsum, accusamus beatae?</div>
            <div className=""> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus accusamus molestiae esse, perspiciatis consequuntur commodi, nam earum nobis eveniet impedit ex illo voluptates beatae possimus sed. Perferendis ullam doloremque enim.</div>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore consequuntur totam maiores fuga voluptates minus nemo, nihil a fugiat autem. Molestias exercitationem dicta officia ut culpa laudantium possimus qui fugiat.
            Quia, maiores. Impedit ut, dicta veritatis eos nam omnis illo fugiat ducimus amet dolor soluta molestias. Tenetur officia soluta dicta ipsa, eligendi fuga eius adipisci architecto dolorem quas cumque assumenda?</div>

        </div>
        <div className="flex flex-col w-0 md:w-1/3 bg-gray-100 invisible md:visible p-20">
            <div className="pb-2 text-normal font-normal">Author</div>
            <div className="flex items-center space-x-3">
                <InitialCircle initial={authorName[0].toUpperCase()}/>
                <div>
                    <div className="font-bold text-2xl">{authorName}</div>
                    <div className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptate reprehenderit magnam?</div>
                </div>
            </div>
        </div>
    </div>
}