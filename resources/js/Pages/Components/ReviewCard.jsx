import React from "react";
import IconUser from "../Icons/IconUser";
import IconStar from "../Icons/IconStar";

export default function ReviewCard(props) {
    const Stars = ({ stars }) => {
        const totalStars = 5;

        const green = new Array(stars).fill(null);
        const gray = new Array(totalStars - stars).fill(null);
        return (
            <>
                {green.map((_, idx) => (
                    <IconStar
                        key={`green-${idx}`}
                        className="h-7 w-7 fill-stars"
                    />
                ))}
                {gray.map((_, idx) => (
                    <IconStar
                        key={`gray-${idx}`}
                        className="h-7 w-7 fill-text-secondary/40"
                    />
                ))}
            </>
        );
    };

    const formatDate = (date) => {
        let format = new Date(date);
        format = new Intl.DateTimeFormat("en-LV", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }).format(format);

        // console.log(format);
        return format;
    };

    return (
        <div>
            <div className="flex w-max min-w-[348px] flex-col gap-4 rounded-lg p-4 shadow-md max-lg:w-full lg:max-w-md">
                <div className="flex justify-between">
                    <div className="flex items-center gap-4">
                        <div className="grid place-items-center rounded-full bg-text-green/50 max-sm:hidden sm:h-[50px] sm:w-[50px] ">
                            <IconUser className="h-2/3 w-2/3 fill-text-primary" />
                        </div>
                        <div className="flex flex-col ">
                            <span className="text-xl font-light">
                                {props.name}
                            </span>
                            <span className="text-xs font-extralight">
                                {formatDate(props.date)}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Stars stars={props.rating} />
                    </div>
                </div>

                <span className="text-xl text-text-dark">{props.review}</span>
            </div>
        </div>
    );
}
