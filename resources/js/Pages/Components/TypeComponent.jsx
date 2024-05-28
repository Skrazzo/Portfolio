import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function TypeComponent({ sequence, className = "" }) {
    return (
        <TypeAnimation
            sequence={[...sequence]}
            wrapper="span"
            speed={35}
            deletionSpeed={50}
            className={`text-2xl font-bold text-text-primary duration-150 sm:text-3xl lg:max-xl:text-xl xl:text-3xl 2xl:text-title ${className}`}
        />
    );
}
