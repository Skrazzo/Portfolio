import React from "react";
import calculateLeft from "../../Functions/timelineCalculator";
export default function Chapter({
    title = "Hello world",
    date = "September 2021",
    description = "Excepteur anim elit magna ea. Ullamco ullamco culpa non tempor dolore culpa consequat ut veniam. Proident est eiusmod esse labore laborum ex mollit ea commodo in occaecat eiusmod.",
    idx = 1,
}) {
    return (
        <div className="flex items-center justify-center gap-8">
            <div className="rounded-full bg-gradient-to-r from-gradient-from to-gradient-to px-4 py-2">
                <span className="text-timeline-description font-extrabold text-bg-green">
                    {date}
                </span>
            </div>
            <div className="shadow-chapter h-5 w-5 rounded-full bg-gradient-to-b from-gradient-from to-gradient-to shadow-gradient-from/10"></div>
            <span
                className={`${calculateLeft(idx) ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-gradient-from to-gradient-to bg-clip-text text-project-description font-extrabold text-transparent`}
            >
                {title}
            </span>
        </div>
    );
}
