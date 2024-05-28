import React from "react";
import Wave from "../Icons/Wave1";

export default function PictureTitle() {
    return (
        <>
            <main className="flex justify-between px-12">
                <figure className="relative">
                    <div className="absolute h-full w-full bg-bg-green/25"></div>
                    <img src={"me.png"} alt="me" />
                </figure>

                <div className="pt-28 text-right">
                    <p className="text-3xl text-text-green">
                        Leons Aleksandrovs
                    </p>
                    <h1 className="bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-6.25xl font-extrabold text-transparent">
                        Full-stack developer
                    </h1>
                    <button className="mt-8 rounded-rem bg-gradient-to-r from-gradient-from to-gradient-to px-8 py-4 text-1.75xl font-bold text-bg-green">
                        CONTACT ME
                    </button>
                </div>
            </main>
            <Wave className="absolute -translate-y-[120px] fill-bg-green-light" />
            <Wave className="absolute -translate-y-[25px] -scale-100 fill-bg-green-light" />
        </>
    );
}
