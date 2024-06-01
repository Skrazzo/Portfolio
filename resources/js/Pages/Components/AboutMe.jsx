import React from "react";
import IconInfo from "../Icons/IconInfo";

export default function AboutMe() {
    return (
        <main className="container mt-12 max-w-6xl px-4 duration-300 sm:mt-36">
            <div className="flex items-center gap-4 duration-300 sm:gap-8">
                <div>
                    <div className="h-14 w-14 rounded-full bg-bg-green-light p-3 sm:h-20 sm:w-20 sm:p-4">
                        <IconInfo className="h-full w-full fill-white" />
                    </div>
                </div>
                <p className="text-3xl font-bold text-bg-green-light/95 duration-300 sm:text-title">
                    About me
                </p>
            </div>

            <div className="mt-4 flex duration-300">
                <div className="flex min-w-14 justify-center sm:min-w-20">
                    <div className="flex h-full w-1 bg-bg-green-light"></div>
                </div>
                <div>
                    <p className="py-2 text-2xl text-bg-green-light duration-300 sm:text-4xl">
                        From a young age, I was interested in technology and
                        gaming. At 10, I began scripting to automate game tasks.
                        This sparked my passion for programming, leading me to
                        learn C++ and C#.
                    </p>
                    <p className="mt-4 py-2 text-2xl text-bg-green-light duration-300 sm:text-4xl">
                        In technical school, my interest shifted to web
                        development. Today, I'm a dedicated full stack
                        developer.
                    </p>
                </div>
            </div>
        </main>
    );
}
