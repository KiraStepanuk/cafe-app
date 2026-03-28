import React, { useState } from "react";
import CreateForm from "../components/SignUp/CreateForm";
import AuthImage from "../components/SignUp/AuthImage";
import LogInForm from "../components/SignUp/LogInForm";
import "../components/SignUp/AuthPage.css"

export default function SignUp () {
    const [isLogin, setIsLogin] = useState(false);

    const switchToLogin = () => setIsLogin(true);

    return (
        <div className="auth-page">
            <div className="auth-page">
                <AuthImage />
            </div>
            <div className="auth-right">
                {isLogin ? <LogInForm /> : <CreateForm onSwitch={switchToLogin} />}
            </div>
        </div>
    )
}