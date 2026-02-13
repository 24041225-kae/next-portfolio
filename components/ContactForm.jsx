"use client";
import { useState } from "react"; // imports usestate hook
import emailjs from '@emailjs/browser'; // imports emailjs service
import { toast } from 'react-toastify';

function ContactForm() { // contact form component
    const [userInput, setUserInput] = useState({ // state for user input
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => { // updates state on input change
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        });
    };

    const handleSubmit = async (e) => { // handles form submission
        e.preventDefault(); // prevents default form submission

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID; // gets service id
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID; // gets template id
        const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY; // gets user id

        try { // tries to send email
            const emailParams = {
                name: userInput.name,
                email: userInput.email,
                message: userInput.message
            };

            const res = await emailjs.send(serviceID, templateID, emailParams, userID); // sends email

            if (res.status === 200) {
                toast.success("Message sent!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setUserInput({ // resets form
                    name: "",
                    email: "",
                    message: ""
                });
            }
        } catch (error) { // catches error
            toast.error("Failed to send message. Please try again later.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
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