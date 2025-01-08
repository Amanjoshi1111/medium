export function InitialCircle({initial}: Initial){
    return <>
    <div className="rounded-full bg-gray-700 w-10 h-10 flex-shrink-0 text-white flex justify-center items-center">{initial}</div>
    </>
}

type Initial = {
    initial : string
}