import React from "react";
import Wave1 from "../Icons/Wave1";
import Chapter from "./Timeline/Chapter";
import ChapterMobile from "./Timeline/ChapterMobile";

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
            last: true,
        },
    ];

    return (
        <>
            <Wave1 className="mt-4 translate-y-1 fill-bg-green" />
            <div className="bg-bg-green pt-8 text-white">
                {timelineData.map((chapter, idx) => {
                    return (
                        <>
                            <Chapter idx={idx + 1} {...chapter} />
                            <ChapterMobile {...chapter} />
                        </>
                    );
                })}
            </div>
        </>
    );
}
