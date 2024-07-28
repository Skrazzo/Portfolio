import React from "react";

function IconUpwork({ className = "", strokeWidth = 1.5 }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${className}`}
        >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <path d="M3 7v5a3 3 0 006 0V7h1l4 6c.824 1.319 1.945 2 3.5 2a3.5 3.5 0 000-7c-2.027 0-3.137 1-3.5 3-.242 1.33-.908 4-2 8"></path>
        </svg>
    );
}

export default IconUpwork;
