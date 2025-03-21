import React from "react";
import calculateLeft from "../../Functions/timelineCalculator";
import { motion } from "framer-motion";

export default function Chapter({
    title = "Hello world",
    date = "September 2021",
    description = "Excepteur anim elit magna ea. Ullamco ullamco culpa non tempor dolore culpa consequat ut veniam. Proident est eiusmod esse labore laborum ex mollit ea commodo in occaecat eiusmod.",
    idx = 1,
    first = false,
    last = false,
}) {
    return (
        <div
            className={`mx-auto max-w-screen-2xl ${first ? "" : "-translate-y-5"} max-lg:hidden`}
        >
            <div
                className={`flex ${calculateLeft(idx) ? "" : "flex-row-reverse"} items-center justify-center gap-8`}
            >
                <div className="flex-1">
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.5,
                            x: calculateLeft(idx) ? 150 : -150,
                        }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className={`${calculateLeft(idx) ? "ml-auto" : "mr-auto"} w-fit rounded-full bg-gradient-to-r from-gradient-from to-gradient-to px-4 py-2 `}
                    >
                        <span className="text-project-description font-extrabold text-bg-green">
                            {date}
                        </span>
                    </motion.div>
                </div>

                <motion.div
                    className="grid place-items-center"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="z-10 h-5 w-5 rounded-full bg-gradient-to-b from-gradient-from to-gradient-to shadow-chapter shadow-gradient-from/10"></div>
                    <div className="absolute z-0 h-12 w-1 translate-y-1/2 bg-bg-green-light"></div>
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                        x: !calculateLeft(idx) ? 150 : -150,
                    }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className={`${calculateLeft(idx) ? "" : "text-right"} flex-1`}
                >
                    <span
                        className={`bg-gradient-to-l from-gradient-from to-gradient-to bg-clip-text text-4xl font-extrabold text-transparent`}
                    >
                        {title}
                    </span>
                </motion.div>
            </div>

            <div
                className={`flex ${calculateLeft(idx) ? "" : "flex-row-reverse"} justify-center gap-8 overflow-hidden`}
            >
                <motion.p
                    initial={{ opacity: 0, x: calculateLeft(idx) ? 200 : -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className={`${calculateLeft(idx) ? "text-right" : "text-left"} flex-1 ${last ? "pb-4" : "pb-16"} pt-4 text-project-description font-light text-text-primary `}
                >
                    {description}
                </motion.p>
                <div className="flex w-5 justify-center">
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileInView={{ opacity: 1, height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className=" w-1 rounded-full bg-bg-green-light"
                    ></motion.div>
                </div>
                <div className="flex-1"></div>
            </div>
        </div>
    );
}
