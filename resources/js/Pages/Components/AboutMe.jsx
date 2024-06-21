import React from "react";
import IconInfo from "../Icons/IconInfo";
import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <main className="container mt-12 max-w-6xl px-4 duration-300 sm:mt-36 ">
            <div className="flex items-center gap-4 duration-300 sm:gap-8">
                <div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="h-14 w-14 rounded-full bg-bg-green-light p-3 sm:h-20 sm:w-20 sm:p-4"
                    >
                        <IconInfo className="h-full w-full fill-white" />
                    </motion.div>
                </div>
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-3xl font-bold text-bg-green-light/95 sm:text-title"
                    >
                        About me
                    </motion.p>
                </div>
            </div>

            <div className="mt-4 flex duration-300">
                <div className="flex min-w-14 justify-center sm:min-w-20">
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.2 }}
                        className="flex  w-1 rounded-full bg-bg-green-light"
                    ></motion.div>
                </div>
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="py-2 text-2xl leading-8 text-bg-green-light sm:text-project-description sm:leading-project-description"
                    >
                        From a young age, I was interested in technology and
                        gaming. At 10, I began scripting to automate game tasks.
                        This sparked my passion for programming, leading me to
                        learn C++ and C#.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-4 py-2 text-2xl leading-8 text-bg-green-light sm:text-project-description sm:leading-project-description"
                    >
                        In technical school, my interest shifted to web
                        development. Today, I'm a dedicated full stack
                        developer.
                    </motion.p>
                </div>
            </div>
        </main>
    );
}
