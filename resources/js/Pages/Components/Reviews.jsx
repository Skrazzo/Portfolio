import React, { useEffect, useRef, useState } from "react";
import IconReviews from "../Icons/IconReviews";
import TypeComponent from "./TypeComponent";
import ReviewCard from "./ReviewCard";
import useWindowDimensions from "./Hook/useWindowDimensions";
import { motion } from "framer-motion";

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
        <div className="container max-w-screen-2xl px-2 sm:px-4">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 flex gap-4"
            >
                <IconReviews className="fill-bg-green-light max-sm:w-12" />
                <span className="mt-3 text-3xl font-bold text-bg-green-light/95 sm:mt-[10px] sm:text-title">
                    Feedback
                </span>
            </motion.div>

            <div
                className=" mt-4 w-full overflow-x-scroll p-2 sm:mt-16"
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
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex w-max items-center rounded-lg bg-bg-footer/70 px-20 py-16"
                        >
                            <span className="text-xl text-text-secondary">
                                More coming soon ...
                            </span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
