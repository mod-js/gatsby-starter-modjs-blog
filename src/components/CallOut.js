import React from "react";
import Button from "./Button";
import { Link } from "gatsby";

const CallOut = ({title, text, buttonText, link}) => {
    return (
        <div className="container px-6 py-8 mx-auto">
                    <div className="container px-6 py-16 mx-auto text-center">
            <div className="max-w-lg mx-auto">
                <div className="text-3xl font-bold md:text-4xl">{title}</div>
                <p className="mt-6">{text}</p>
                <Link to={link}><Button>{buttonText}</Button></Link>
            </div>
        </div>
        </div>
    )
};

export default CallOut;
