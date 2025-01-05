import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Signin() {
    let navigator = useNavigate();

    const onClick = () => {
        navigator("/signup");
    }

    return <div className="flex justify-between [&>*]:w-1/2  h-screen font-sans">
        <div className="flex items-center justify-center ">
            <div className="flex flex-col justify-center text-center h-3/4">
                <div className="px-6 pb-5">
                    <div className="font-extrabold text-3xl">Create an account</div>
                    <div className="font-light text-sm text-gray-500">Already have an account? <button className="underline" onClick={onClick}>Signup</button></div>
                </div>
                <div>
                    <Input type="text" placeholder="example@gmail.com" headingName="Email" />
                    <Input type="password" placeholder="" headingName="Password" />
                    <Button text="Sign In" />
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-left bg-gray-100 text-left px-20">
            <div className=" text-xl font-bold">"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae harum, iusto aliquam perferendis debitis eum ipsum."</div>
            <div className="pt-3 font-semibold">Aman Joshi</div>
            <div className="font-normal text-sm text-gray-500">CEO, Medium clone</div>
        </div>
    </div>
}