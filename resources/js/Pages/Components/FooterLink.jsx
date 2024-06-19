import React from "react";

export default function FooterLink({ icon, text, link }) {
    return (
        <a href={link} target="_blank" className="flex items-center gap-2">
            <div className="rounded-lg border border-text-secondary/35 bg-bg-white p-1 text-text-dark">
                {icon}
            </div>
            <span className="text-3xl text-bg-green-light max-xl:hidden">
                {text}
            </span>
        </a>
    );
}
