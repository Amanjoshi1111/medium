import { useState } from "react"

enum Position {
    Left = 'left',
    Right = 'right'
}

export default function SwitchList() {

    const [selectedButton, useSelectedButton] = useState(Position.Left);

    return <div className="h-16 flex flex-left pl-2 text-gray-500 items-center space-x-5 border-b *:flex *:justify-center *:items-center [&>*]:h-full [&>*]:cursor-pointer ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        <div className={`hover:text-black ${selectedButton == Position.Left ? "border-b-2 border-black text-black" : ""}`} onClick={() => useSelectedButton(Position.Left)}>For You</div>
        <div className={`hover:text-black ${selectedButton == Position.Right ? "border-b-2 border-black text-black" : ""}`} onClick={() => useSelectedButton(Position.Right)}>Follwing</div>
        {/* <div className="flex justify-center items-center space-x-5 h-full [&>*]:h-full [&>*]:peer-hover:text-black"> </div> */}

    </div>
}