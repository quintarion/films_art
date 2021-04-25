import React from "react";
import Header from "./Header";
import "../style/contact.scss";

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact--header">
                <Header />
            </div>
            <div className="contact--content">
                <a href="mailto:contact@ergonfilms.com">contact@ergonfilms.com</a>
            </div>
        </div>
    )
}

export default Contact;