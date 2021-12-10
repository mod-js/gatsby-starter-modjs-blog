import React from "react";

const Button = ({ children, onClick, type }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className="w-full p-2 m-1 text-sm font-semibold 
            text-white uppercase transition-colors duration-200 
            transform bg-purple-900 rounded-md lg:w-auto 
            hover:bg-pink-900">
            {children}
        </button>
    )
};

export default Button;
