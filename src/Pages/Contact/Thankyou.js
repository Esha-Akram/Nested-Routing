import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'; // Import your CSS file

const ThankYou = () => {
    return (
        <div className="thank-you">
            <h2>Thank You for Your Submission!</h2>
            <p>Your message has been successfully submitted.</p>
            <Link to="/">Go back to Home</Link>
        </div>
    );
}

export default ThankYou;
