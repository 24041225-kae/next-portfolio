"use client";
import { useState } from "react";
import emailjs from '@emailjs/browser';

function ContactForm() {
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        try {
            const emailParams = {
                name: userInput.name,
                email: userInput.email,
                message: userInput.message
            };

            const res = await emailjs.send(serviceID, templateID, emailParams, userID);

            if (res.status === 200) {
                alert("Message sent successfully!");
                setUserInput({
                    name: "",
                    email: "",
                    message: ""
                });
            }
        } catch (error) {
            alert("Failed to send message. Please try again later.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-3">
            <div className="mb-3">
                <label className="form-label">Your Name:</label>
                <input
                    type="text"
                    name="name"
                    value={userInput.name}
                    onChange={handleChange}
                    required
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Your Email:</label>
                <input
                    type="email"
                    name="email"
                    value={userInput.email}
                    onChange={handleChange}
                    required
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Your Message:</label>
                <textarea
                    name="message"
                    rows="4"
                    value={userInput.message}
                    onChange={handleChange}
                    required
                    className="form-control"
                />
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
    );
}

export default ContactForm;