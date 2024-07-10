import React from "react";
import AuthForm from "@/components/AuthForm";

const SignUn= async () => {
    return(
        <section className="flex-center size-full max-sm:px-6">
            <AuthForm 
                type="sign-up"
            />
        </section>
    )
}

export default SignUn

