import "../style/create-form.css"

export default function CreateForm() {
    return (
        <div className="form-box">
            <h2>Create an account</h2>
            <p>Enter your details below</p>

            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email or Phone Number" />
            <input type="password" placeholder="Password" />

            <button className="primary-btn">Create Account</button>

            <button className="google-btn">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                    alt="google"
                />
                Sign up with Google
            </button>

            <p className="login-text">
                Already have account? <span>Log in</span>
            </p>
        </div>
    )
}