import React from "react";
import Wave1 from "../Icons/Wave1";
import Wave2 from "../Icons/Wave2";

export default function PictureTitle() {
    return (
        <>
            <main className="flex justify-between px-8 max-lg:flex-col max-lg:flex-col-reverse sm:px-12">
                <figure className="relative max-sm:mt-8">
                    <div className="absolute h-full w-full bg-bg-green/25"></div>
                    <img
                        src={"me.png"}
                        alt="picture of me"
                        className="mx-auto"
                    />
                </figure>

                <div className="text-center duration-150 sm:mt-10 lg:text-right xl:mt-28">
                    <p className="text-3xl text-text-green max-sm:hidden">
                        Leons Aleksandrovs
                    </p>
                    <h1 className="bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-6.25xl font-extrabold text-transparent">
                        Full-stack developer
                    </h1>
                    <button className="shadow-glow hover:shadow-glow-hover mt-8 rounded-rem bg-gradient-to-r from-gradient-from to-gradient-to px-8 py-4 text-1.75xl font-bold text-bg-green shadow-gradient-to/10 duration-150 hover:shadow-gradient-to/20 max-sm:rounded-full">
                        CONTACT ME
                    </button>
                </div>
            </main>

            <Wave1
                className={`absolute 
                    -translate-y-[120px] 
                    fill-bg-green-light
                    max-[1400px]:-translate-y-[100px]
                    max-[1100px]:-translate-y-[80px]
                    max-lg:hidden
                `}
            />
            <Wave1
                className={`absolute -translate-y-[25px] -scale-100 fill-bg-green-light max-lg:hidden`}
            />

            <Wave2
                className={`absolute -translate-y-[60px] fill-bg-green-light lg:hidden`}
            />
            <Wave2
                className={`absolute -translate-y-[30px] -scale-100 fill-bg-green-light lg:hidden`}
            />
        </>
    );
}
