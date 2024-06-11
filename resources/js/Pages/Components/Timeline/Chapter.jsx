import React from "react";
import calculateLeft from "../../Functions/timelineCalculator";
export default function Chapter({
    title = "Hello world",
    date = "September 2021",
    description = "Excepteur anim elit magna ea. Ullamco ullamco culpa non tempor dolore culpa consequat ut veniam. Proident est eiusmod esse labore laborum ex mollit ea commodo in occaecat eiusmod.",
    idx = 1,
}) {
    return (
        <div className="mx-auto max-w-screen-2xl max-lg:hidden">
            <div
                className={`flex ${calculateLeft(idx) ? "" : "flex-row-reverse"} items-center justify-center gap-8`}
            >
                <div className="flex-1">
                    <div
                        className={`${calculateLeft(idx) ? "ml-auto" : "mr-auto"} w-fit rounded-full bg-gradient-to-r from-gradient-from to-gradient-to px-4 py-2 `}
                    >
                        <span className="text-project-description font-extrabold text-bg-green">
                            {date}
                        </span>
                    </div>
                </div>

                <div className="h-5 w-5 rounded-full bg-gradient-to-b from-gradient-from to-gradient-to shadow-chapter shadow-gradient-from/10"></div>

                <div
                    className={`${calculateLeft(idx) ? "" : "text-right"} flex-1`}
                >
                    <span
                        className={`bg-gradient-to-l from-gradient-from to-gradient-to bg-clip-text text-4xl font-extrabold text-transparent`}
                    >
                        {title}
                    </span>
                </div>
            </div>

            <div
                className={`flex ${calculateLeft(idx) ? "" : "flex-row-reverse"} justify-center gap-8`}
            >
                <p
                    className={`${calculateLeft(idx) ? "text-right" : "text-left"} flex-1 pb-16 pt-4 text-project-description font-light text-text-green `}
                >
                    {description}
                </p>
                <div className="flex w-5 justify-center">
                    <div className=" border border-bg-green-light"></div>
                </div>
                <div className="flex-1"></div>
            </div>
        </div>
    );
}
