import React from "react";
import Home from "./Home";

const Contact = () => {
    const myStyle = {
        color: "yellow",
        backgroundColor: "red",
        textAlign: "center",
    };
    return (
        <div>
            <Home />
            <h1 style={myStyle}>Contact page</h1>
        </div>
    );
};

export default Contact;