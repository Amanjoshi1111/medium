import { useState } from "react";

type Input = {
    type: string,
    placeholder: string,
    headingName: string
}

export default function Input({ type, placeholder, headingName }: Input) {

    const [showPassword, setShowPassoword] = useState(true);
    const isPassword = (type == 'password');

    const onClick = () => {
        setShowPassoword(!showPassword);
    }

    return <div className="text-left pb-4">
        <div className="font-semibold pb-2">{headingName}</div>
        <div className="flex justify-center items-center relative">
            <input className="border rounded-md w-full py-1.5 px-2.5"
                type={showPassword ? 'password' : 'text'}
                placeholder={placeholder}
            />
            {(isPassword) && <span className="absolute right-2 cursor-pointer" onClick={onClick}><Eye state={showPassword} /></span>}
        </div>
    </div>
}

function Eye({ state }: { state: boolean }) {

    return <div>
        {state ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
        </svg>
        }
    </div>
}