import React from "react";

export default function Wave1({ className = "" }) {
    return (
        <svg
            id="wave"
            viewBox="0 0 1440 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className}`}
        >
            <path
                style={{ transform: "translate(0, 0px)", opacity: 1 }}
                d="M0,60L60,53.3C120,47,240,33,360,25C480,17,600,13,720,25C840,37,960,63,1080,65C1200,67,1320,43,1440,43.3C1560,43,1680,67,1800,65C1920,63,2040,37,2160,23.3C2280,10,2400,10,2520,15C2640,20,2760,30,2880,31.7C3000,33,3120,27,3240,35C3360,43,3480,67,3600,68.3C3720,70,3840,50,3960,38.3C4080,27,4200,23,4320,33.3C4440,43,4560,67,4680,73.3C4800,80,4920,70,5040,70C5160,70,5280,80,5400,73.3C5520,67,5640,43,5760,31.7C5880,20,6000,20,6120,30C6240,40,6360,60,6480,70C6600,80,6720,80,6840,81.7C6960,83,7080,87,7200,88.3C7320,90,7440,90,7560,81.7C7680,73,7800,57,7920,50C8040,43,8160,47,8280,46.7C8400,47,8520,43,8580,41.7L8640,40L8640,100L8580,100C8520,100,8400,100,8280,100C8160,100,8040,100,7920,100C7800,100,7680,100,7560,100C7440,100,7320,100,7200,100C7080,100,6960,100,6840,100C6720,100,6600,100,6480,100C6360,100,6240,100,6120,100C6000,100,5880,100,5760,100C5640,100,5520,100,5400,100C5280,100,5160,100,5040,100C4920,100,4800,100,4680,100C4560,100,4440,100,4320,100C4200,100,4080,100,3960,100C3840,100,3720,100,3600,100C3480,100,3360,100,3240,100C3120,100,3000,100,2880,100C2760,100,2640,100,2520,100C2400,100,2280,100,2160,100C2040,100,1920,100,1800,100C1680,100,1560,100,1440,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
            />
        </svg>
    );
}
