import React from "react";
import Wave1 from "../Icons/Wave1";
import Chapter from "./Timeline/Chapter";
import ChapterMobile from "./Timeline/ChapterMobile";

export default function Timeline() {
    return (
        <>
            <Wave1 className="mt-4 translate-y-1 fill-bg-green" />
            <div className="bg-bg-green pt-1 text-white">
                <Chapter date="May 2016" idx={1} />
                <ChapterMobile date="May 2016" />
                <Chapter date="September 2021" idx={2} />
                <ChapterMobile date="September 2021" />
            </div>
        </>
    );
}
