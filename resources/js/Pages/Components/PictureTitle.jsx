import React from "react";
// import mePic from 'me.png';

export default function PictureTitle() {
    return (
        <main className="flex justify-between px-12">
            <figure className="aspect-square relative">
                <div className="absolute w-full h-full bg-bg-green/25"></div>
                <img src={"me.png"} alt="me"/>
            </figure>

            <div className="text-right pt-28">
                <p className="text-3xl text-text-green">Leons Aleksandrovs</p>
                <h1 className="text-6.25xl font-extrabold ">
                    Full-stack developer
                </h1>
                <button className="text-bg-green font-bold text-1.75xl rounded-rem bg-red-400 px-8 py-4 mt-8">
                    CONTACT ME
                </button>
            </div>
        </main>
    );
}
