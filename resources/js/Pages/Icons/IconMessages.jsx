import React from "react";

export default function IconMessages({ className = "" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={68}
            height={68}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${className}`}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
            <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
        </svg>
    );
}
