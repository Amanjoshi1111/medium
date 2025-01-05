import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import { SigninInput } from "@amanjoshi1111/medium-types";
import axios, { AxiosError } from "axios";
import { BACKEND_URL } from "../config";

export default function Signin() {
    let navigator = useNavigate();
    const onClick = () => {
        navigator("/signup");
    }

    const [signinInputs, useSigninInputs] = useState<SigninInput>({
        email: "",
        password: ""
    });

    const onSubmit = async () => {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, signinInputs);
            const token = response.data?.jwt;
            if (token) {
                localStorage.setItem('token', token);
                navigator("/blog");
            }else {
                alert('No token recieved');
            }

        } catch (err) {
            if (err instanceof AxiosError) {
                if (err.response?.status == 401)
                    alert(err.response.data.msg);
                else {
                    alert(`Message : ${err.response?.status}`);
                }
            } else if (err instanceof Error) {
                alert(`Unknown error : ${err.message}`);
            }

        }

    }

    return <div className="flex justify-between [&>*]:w-1/2  h-screen font-sans">
        <div className="flex items-start justify-center pt-60">
            <div className="flex flex-col justify-center text-center h-min w-1/2">
                <div className="px-6 pb-5">
                    <div className="font-extrabold text-3xl">Welcome Back</div>
                    <div className="font-light text-sm text-gray-500">Don't have any account? <button className="underline" onClick={onClick}>Signup</button></div>
                </div>
                <div>
                    <Input type="text" placeholder="example@gmail.com" headingName="Email" onChange={(e) => {
                        useSigninInputs({
                            ...signinInputs,
                            email: e.target.value
                        })
                    }} />
                    <Input type="password" placeholder="" headingName="Password" onChange={(e) => {
                        useSigninInputs({
                            ...signinInputs,
                            password: e.target.value
                        })
                    }} />
                    <Button text="Sign In" onClick={onSubmit} />
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