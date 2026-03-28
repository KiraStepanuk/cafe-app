import "../style/Signup.css";
import img from "../media/img.png";
import LogInForm from "./LogInForm";

export default function Signup() {
    return (
        <div className="signup-container">
            <div className="left-side">
                <img
                    src={img}
                    alt="shopping"
                />
            </div>
            <div className="right-side">
                <LogInForm />
            </div>
        </div>
    )
}
