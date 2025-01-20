'use client'
import React, { useState } from "react";
import axios from "axios";

function ContactCheck() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const verifyEmail = async () => {
        if (!email) {
            setMessage("Please enter an email!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3001/verifyemail", { email });
            console.log(response.data)
            if (response.data.smtp_check) {
                setMessage("✅ Email Verified!");
            } else {
                setMessage("❌ Invalid Email!");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("Error verifying email!");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Email Verification</h2>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ padding: "10px", width: "250px" }}
            />
            <button onClick={verifyEmail} style={{ marginLeft: "10px", padding: "10px" }}>
                Verify
            </button>
            <p>{message}</p>
        </div>
    );
}

export default ContactCheck;
