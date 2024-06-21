import React from "react";
import { motion } from "framer-motion";

export default function ChapterMobile({
    title = "Hello world",
    date = "September 2021",
    description = "Excepteur anim elit magna ea. Ullamco ullamco culpa non tempor dolore culpa consequat ut veniam. Proident est eiusmod esse labore laborum ex mollit ea commodo in occaecat eiusmod.",
    first = false,
    last = false,
}) {
    date = date.match(/\d{4}/)[0] || "0000";

    return (
        <div className={`${first ? "" : "-translate-y-2"} px-4 lg:hidden`}>
            <div className="flex items-center gap-2">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="grid place-items-center"
                >
                    <div className="absolute z-0 h-6 w-1 translate-y-1/2  bg-bg-green-light"></div>
                    <div className=" z-10 h-4 w-4 rounded-full bg-gradient-to-b from-gradient-from to-gradient-to shadow-chapter shadow-gradient-from/10"></div>
                </motion.div>
                <motion.span
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className={`ml-1 bg-gradient-to-l from-gradient-from to-gradient-to bg-clip-text text-xl font-extrabold text-transparent`}
                >
                    {title}
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-lg font-light text-text-secondary"
                >
                    {date}
                </motion.span>
            </div>
            <div className="flex gap-2">
                <div className="flex min-w-4 justify-center">
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileInView={{ opacity: 1, height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="w-1 rounded-full bg-bg-green-light"
                    ></motion.div>
                </div>
                <motion.p
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className={`ml-1 ${last ? "pb-2" : "pb-8"} text-xl font-light text-text-primary`}
                >
                    {description}
                </motion.p>
            </div>
        </div>
    );
}
