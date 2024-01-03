"use client"

import Image from "next/image";
import Login from "./Login";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Signup from "./Signup";

export default function Auth() {
    const [isSignup, setIsSignup] = useState<Boolean>(false);
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm" >
                    <Image
                        width={100}
                        height={300}
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-foreground">
                        {`${isSignup ? "Sign up" : "Sign in"} to your account`}
                    </h2>
                    <div className="flex justify-between mt-5">
                        <Button onClick={() => setIsSignup(false)} className="w-44 bg-accent-foreground hover:secondary">Login</Button>
                        <Button onClick={() => setIsSignup(true)} className="w-44 bg-accent-foreground hover:secondary">Sign Up</Button>
                    </div>
                </div>
                {
                    !isSignup ?
                        <Login /> :
                        <Signup />
                }
            </div>

        </>
    );
}
