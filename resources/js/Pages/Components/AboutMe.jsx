import React from "react";
import IconInfo from "../Icons/IconInfo";

export default function AboutMe() {
    return (
        <main className="container mt-36 max-w-6xl">
            <div className="flex items-center gap-8">
                <div>
                    <div className="h-20 w-20 rounded-full bg-bg-green-light p-4">
                        <IconInfo className="h-full w-full fill-white" />
                    </div>
                </div>
                <p className="text-title font-bold text-bg-green-light/95">
                    About me
                </p>
            </div>

            <div className="mt-4 flex">
                <div className="flex min-w-20 justify-center">
                    <div className="flex h-full w-1 bg-bg-green-light"></div>
                </div>
                <p className="py-2 text-4xl text-bg-green-light">
                    From a young age, I was interested in technology and gaming.
                    At 10, I began scripting to automate game tasks. This
                    sparked my passion for programming, leading me to learn C++
                    and C#. In technical school, my interest shifted to web
                    development. Today, I'm a dedicated full stack developer.
                </p>
            </div>
        </main>
    );
}
