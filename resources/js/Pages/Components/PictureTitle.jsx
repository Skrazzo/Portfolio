import React from "react";
import Wave1 from "../Icons/Wave1";
import Wave2 from "../Icons/Wave2";
import { motion } from "framer-motion";

export default function PictureTitle() {
    const scroll = (section) => {
        const s = document.querySelector(`#${section}`);
        s.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <>
            <main className="flex justify-between px-8 max-lg:flex-col max-lg:flex-col-reverse sm:px-12">
                <figure className="relative overflow-hidden max-sm:mt-8">
                    <div className="absolute h-full w-full bg-bg-green/25"></div>
                    <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        src={"me.webp"}
                        alt="picture of me"
                        className="about_me__image mx-auto"
                    />
                </figure>

                <div className="text-center duration-150 sm:mt-10 lg:text-right xl:mt-28">
                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0 }}
                        className="text-3xl text-text-green max-sm:hidden"
                    >
                        Leons Aleksandrovs
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-6.25xl font-extrabold text-transparent"
                    >
                        Full-stack developer
                    </motion.h1>
                    <motion.button
                        initial={{ opacity: 0, y: 100, scale: 0.7 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 rounded-rem bg-gradient-to-r from-gradient-from to-gradient-to px-8 py-4 text-1.75xl font-bold text-bg-green shadow-glow shadow-gradient-to/10  hover:shadow-glow-hover hover:shadow-gradient-to/20 max-sm:rounded-full"
                        onClick={() => scroll("contact")}
                    >
                        CONTACT ME
                    </motion.button>
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
