import { InitialCircle } from "./InitialCircle"
import SearchInput from "./SearchInput"

export default function Navbar() {
    return <div className="h-20 top-0 flex justify-between items-center w-full">
        <div className="flex items-center space-x-3 pr-4">
            <div className="flex space-x-1px">
                <div className="rounded-full w-10 h-10 bg-black"></div>
                <div className="rounded-[70%]  w-5 h-10 bg-black"></div>
                <div className="rounded-[70%]  w-2 h-10 bg-black"></div>
            </div>
            <div>Draft in Kirags</div>
        </div>
        <SearchInput />
        <div className="flex pl-4 items-center shrink justify-between space-x-3 text-gray-500 [&>*]:cursor-pointer">
            <button className="bg-green-600 text-white px-3 py-1 rounded-2xl hover:bg-green-700">Publish</button>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
            </div>
            <div>
                <InitialCircle initial="h"/>
            </div>
        </div>
    </div>
}