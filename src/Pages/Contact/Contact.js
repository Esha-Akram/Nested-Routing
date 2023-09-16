import { Footer } from "../../Components/Footer/Footer";
import './Contact.css';
import React, { useState, useEffect } from "react";
import { useNavigate, Prompt } from "react-router-dom";  //Prompt is not used in version 6
import Swal from "sweetalert2";

export const Contact = () => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [country, setCountry] = useState("");
    const [subject, setSubject] = useState("");
    const Navigate = useNavigate();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isFormEdited, setIsFormEdited] = useState(false);

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (isFormEdited && !isFormSubmitted) {
                event.preventDefault();
                event.returnValue = 'There are Some Unsaved Changes. Do you want to go Away?';
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isFormEdited, isFormSubmitted]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsFormSubmitted(true);

        if (!Name || !Email || !phoneNo || !country || !subject) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all fields!',
            });
        } else {
            Navigate('/success');
        }
    }

    const handleInputChange = () => {
        setIsFormEdited(true);
    }

    return (
        <>
            {/* <Prompt
                when={setIsFormEdited}
                message={() => "There are some unsaved changes, Are you sure you want out?"}
            /> */}
            <div id="contact-form">
                <h2>Get into touch with us</h2>
                <p>Need help with something? Let's discuss your query, and we'll get back to you soon.</p>
                <form className="container" onSubmit={handleSubmit}>
                    <input type="text" id="fname" name="name" placeholder="Name" value={Name} onChange={(event) => { setName(event.target.value); handleInputChange(); }} />
                    <input type="text" id="email" name="email" placeholder="Email Address" value={Email} onChange={event => { setEmail(event.target.value); handleInputChange(); }} />
                    <input type="text" id="PhoneNo" name="phoneNo" placeholder="Phone Number" value={phoneNo} onChange={event => { setPhoneNo(event.target.value); handleInputChange(); }} />
                    <select id="country" name="country" value={country} onChange={event => { setCountry(event.target.value); handleInputChange(); }}>
                        <option>Select Country</option>
                        <option value="pakistan">Pakistan</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>
                    <textarea id="subject" name="subject" placeholder="Tell us about your query" value={subject} onChange={event => { setSubject(event.target.value); handleInputChange(); }}></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <Footer />
        </>
    )
}
