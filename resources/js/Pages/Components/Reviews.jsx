import React from "react";
import IconReviews from "../Icons/IconReviews";
import TypeComponent from "./TypeComponent";

export default function Reviews({ reviews = [] }) {
    return (
        <div className="container max-w-screen-2xl border px-2">
            <div className="flex gap-4">
                <IconReviews className="fill-bg-green-light max-sm:w-12" />
                <TypeComponent
                    sequence={["Reviews"]}
                    title={false}
                    className="mt-3 text-3xl font-bold text-bg-green sm:mt-[10px] sm:text-title"
                />
            </div>
        </div>
    );
}
