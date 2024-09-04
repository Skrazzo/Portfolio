import React from "react";
import Wave1 from "../Icons/Wave1";
import Chapter from "./Timeline/Chapter";
import ChapterMobile from "./Timeline/ChapterMobile";
import Wave2 from "../Icons/Wave2";
import { motion } from "framer-motion";

export default function Timeline() {
    const timelineData = [
        {
            date: "May 2016",
            title: "Start of the journey",
            description:
                "This moment marked the beginning of my journey into programming, setting the stage for my passion and career in technology.",

            first: true,
        },
        {
            date: "Semptember 2021",
            title: "Web dev",
            description:
                "After enrolling in technical school, I developed a keen interest in creating web applications.",
        },
        {
            date: "June 2024",
            title: "Signed up to UpWork",
            description:
                "During the summer break, I focused on advancing my skills and earning income. I joined UpWork, where I successfully earned money and built strong relationships with quality clients.",
            last: true,
        },
    ];

    return (
        <>
            <Wave1 className="mt-4 translate-y-1 fill-bg-green" />
            <div className="bg-bg-green pb-4 pt-8 text-white">
                {timelineData.map((chapter, idx) => {
                    return (
                        <>
                            <Chapter idx={idx + 1} {...chapter} />
                            <ChapterMobile {...chapter} />
                        </>
                    );
                })}
            </div>
            <Wave1 className="-translate-y-1 -scale-100 fill-bg-green" />
        </>
    );
}
