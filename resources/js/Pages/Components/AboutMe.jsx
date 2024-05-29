import React from "react";
import IconInfo from "../Icons/IconInfo";

export default function AboutMe() {
    return (
        <main className="container mt-36 max-w-6xl border">
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

            <div className="flex">
                <div className="flex w-20 justify-center">
                    <div className="flex h-full w-1 border border-red-500"></div>
                </div>
                <p></p>
            </div>
        </main>
    );
}
