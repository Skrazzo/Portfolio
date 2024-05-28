import React from "react";
// import mePic from 'me.png';

export default function PictureTitle() {
    return (
        <main className="flex justify-between px-12">
            <figure className="relative aspect-square">
                <div className="absolute h-full w-full bg-bg-green/25"></div>
                <img src={"me.png"} alt="me" />
            </figure>

            <div className="pt-28 text-right">
                <p className="text-3xl text-text-green">Leons Aleksandrovs</p>
                <h1 className="text-6.25xl font-extrabold ">
                    Full-stack developer
                </h1>
                <button className="mt-8 rounded-rem bg-red-400 px-8 py-4 text-1.75xl font-bold text-bg-green">
                    CONTACT ME
                </button>
            </div>
        </main>
    );
}
