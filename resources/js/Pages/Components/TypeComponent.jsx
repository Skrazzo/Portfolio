import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function TypeComponent({ sequence, className = '', setCursorFalseMS = 9000}) {
    // const [cursor, setCursor] = useState(true);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCursor(false)
    //         console.log('asd')
    //     }, setCursorFalseMS)
    // }, []);

    return (
        <TypeAnimation 
            sequence={[ ...sequence ]}
            wrapper="span"
            speed={35}
            deletionSpeed={50}
            className={`text-text-primary text-title font-bold ${className}`}
        />
    )
}
