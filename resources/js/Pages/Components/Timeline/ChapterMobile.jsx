import React from "react";

export default function ChapterMobile({
    title = "Hello world",
    date = "September 2021",
    description = "Excepteur anim elit magna ea. Ullamco ullamco culpa non tempor dolore culpa consequat ut veniam. Proident est eiusmod esse labore laborum ex mollit ea commodo in occaecat eiusmod.",
    first = false,
    last = false,
}) {
    date = date.match(/\d{4}/)[0] || "0000";

    return (
        <div className={`${first ? "" : "-translate-y-2"} px-4 lg:hidden`}>
            <div className="flex items-center gap-2">
                <div className="grid place-items-center">
                    <div className="absolute z-0 h-6 w-1 translate-y-1/2  bg-bg-green-light"></div>
                    <div className=" z-10 h-4 w-4 rounded-full bg-gradient-to-b from-gradient-from to-gradient-to shadow-chapter shadow-gradient-from/10"></div>
                </div>
                <span
                    className={`ml-1 bg-gradient-to-l from-gradient-from to-gradient-to bg-clip-text text-xl font-extrabold text-transparent`}
                >
                    {title}
                </span>
                <span className="text-lg font-light text-text-secondary">
                    {date}
                </span>
            </div>
            <div className="flex gap-2">
                <div className="flex min-w-4 justify-center">
                    <div className="w-1 rounded-full bg-bg-green-light"></div>
                </div>
                <p
                    className={`ml-1 ${last ? "pb-2" : "pb-8"} text-xl font-light text-text-primary`}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}
