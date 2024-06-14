import React, { useEffect, useRef, useState } from "react";
import IconReviews from "../Icons/IconReviews";
import TypeComponent from "./TypeComponent";
import ReviewCard from "./ReviewCard";
import useWindowDimensions from "./Hook/useWindowDimensions";

export default function Reviews({ reviews = [] }) {
    const { width } = useWindowDimensions();
    const scrollContainerRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(true);
    // useEffect(() => console.log(width), [width]);

    useEffect(() => {
        if (reviews.length <= 4) return;

        let scrollInterval;
        let scrollLeft = true;

        if (isScrolling) {
            scrollInterval = setInterval(() => {
                if (scrollContainerRef.current) {
                    const percentage =
                        (scrollContainerRef.current.scrollLeft /
                            (scrollContainerRef.current.scrollWidth -
                                scrollContainerRef.current.clientWidth)) *
                        100;

                    if (percentage === 100) scrollLeft = false;
                    if (percentage === 0) scrollLeft = true;

                    if (scrollLeft) {
                        scrollContainerRef.current.scrollLeft += 1;
                    } else {
                        scrollContainerRef.current.scrollLeft -= 1;
                    }
                }
            }, 30);
        }

        const handleUserScroll = () => {
            clearInterval(scrollInterval);
        };

        if (!isScrolling) {
            console.log("canceled");
            handleUserScroll();
        }

        return () => {
            clearInterval(scrollInterval);
        };
    }, [isScrolling]);

    return (
        <div className="container max-w-screen-2xl px-2">
            <div className="mt-4 flex gap-4">
                <IconReviews className="fill-bg-green-light max-sm:w-12" />
                <TypeComponent
                    sequence={["Feedback"]}
                    title={false}
                    className="mt-3 text-3xl font-bold text-bg-green-light/95 sm:mt-[10px] sm:text-title"
                />
            </div>

            <div
                className=" no-scrollbar mt-4 w-full overflow-x-scroll p-2 sm:mt-16"
                ref={scrollContainerRef}
            >
                <div
                    className={`flex gap-8`}
                    onMouseUp={() => setIsScrolling(false)}
                >
                    {reviews.map((review, idx) => (
                        <ReviewCard {...review} key={`review-${idx}`} />
                    ))}
                    <div>
                        <div className="flex items-center rounded-lg bg-bg-footer/70 px-20 py-16">
                            <span className="text-text-secondary">
                                More coming soon ...
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
