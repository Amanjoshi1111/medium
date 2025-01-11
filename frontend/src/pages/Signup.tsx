import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import { SignupInput } from "@amanjoshi1111/medium-types";
import axios, { AxiosError } from "axios";
import { BACKEND_URL } from "../config";


export default function Signup() {

    let navigator = useNavigate();
    const onClick = () => {
        navigator("/signin");
    }

    const [signupInputs, useSignupInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })

    const onSubmit = async () => {
        try {
            console.log("HELLo signup", signupInputs);
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, signupInputs);
            console.log({response});
            const token = response.data?.jwt;
            console.log("token", token);
            if (token) {
                localStorage.setItem('token', token);
                navigator("/blogs");
            } else {
                alert('No token recieved');
            }
        } catch (err) {
            console.log("ERROR", err);
            if (err instanceof AxiosError) {
                if (err.response?.status == 401)
                    alert(err.response.data.msg);
                else if(err.response?.status == 411){
                    alert(`Invalid fields`);
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
                    <div className="font-extrabold text-3xl">Create an account</div>
                    <div className="font-light text-sm text-gray-500">Already have an account? <button className="underline" onClick={onClick}>Login</button></div>
                </div>
                <div>
                    <Input type="text" placeholder="Enter your username" headingName="Name" onChange={(e) => {
                        useSignupInputs({
                            ...signupInputs,
                            name: e.target.value
                        })
                    }} />
                    <Input type="text" placeholder="example@gmail.com" headingName="Email" onChange={(e) => {
                        useSignupInputs({
                            ...signupInputs,
                            email: e.target.value
                        })
                    }} />
                    <Input type="password" placeholder="Enter your password" headingName="Password" onChange={(e) => {
                        useSignupInputs({
                            ...signupInputs,
                            password: e.target.value
                        })
                    }} />
                    <Button text="Sign Up" onClick={onSubmit} />
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