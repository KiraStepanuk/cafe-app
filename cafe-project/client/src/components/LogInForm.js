import "../style/login-form.css"

export default function LogInForm() {
    return (
        <div className="form-box">
            <h2>Log in to Exclusive</h2>
            <p>Enter your details below</p>

            <input type="text" placeholder="Email or Phone Number" />
            <input type="password" placeholder="Password" />

            <div className="actions">
                <button className="login-btn">Log In</button>
                <span className="forgot">Forget Password></span>
            </div>
        </div>
    )
}