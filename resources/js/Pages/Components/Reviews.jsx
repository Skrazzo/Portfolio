import React from "react";
import IconReviews from "../Icons/IconReviews";
import TypeComponent from "./TypeComponent";
import ReviewCard from "./ReviewCard";

export default function Reviews({ reviews = [] }) {
    return (
        <div className="container max-w-screen-2xl px-2">
            <div className="flex gap-4">
                <IconReviews className="fill-bg-green-light max-sm:w-12" />
                <TypeComponent
                    sequence={["Feedback"]}
                    title={false}
                    className="mt-3 text-3xl font-bold text-bg-green-light/95 sm:mt-[10px] sm:text-title"
                />
            </div>
            <div className="mt-16 flex gap-8">
                {reviews.map((review, idx) => (
                    <ReviewCard {...review} key={`review-${idx}`} />
                ))}
            </div>
        </div>
    );
}
