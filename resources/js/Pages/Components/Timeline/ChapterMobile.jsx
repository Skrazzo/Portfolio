import React from "react";

export default function ChapterMobile(
    title = "Hello world",
    date = "September 2021",
    description = "Excepteur anim elit magna ea. Ullamco ullamco culpa non tempor dolore culpa consequat ut veniam. Proident est eiusmod esse labore laborum ex mollit ea commodo in occaecat eiusmod.",
) {
    // date = date.match(/\d{4}/)[0] || "0000";

    return <div className="p-8 lg:hidden">ChapterMobile</div>;
}
