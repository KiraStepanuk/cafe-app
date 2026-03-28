import React from "react";
import pict from "./assets/pict.jpg";

export default function AuthImage() {
    return (
        <div className="auth-left">
            <img src={pict} alt="" className="auth-image" />
        </div>
    );
}