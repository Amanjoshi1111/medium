

type buttonType = {
    text: string,
    onClick: () => void
}

export default function Button({text, onClick}: buttonType){

    return <button className="rounded-md w-full py-1.5 px-2.5 bg-black text-white" onClick={onClick} >{text}</button>
}