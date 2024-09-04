import React, { useRef } from "react";
import Wave from "../Icons/Wave1";
import TypeComponent from "./TypeComponent";
import IconSchool from "../Icons/IconSchool";
import IconWeb from "../Icons/IconWeb";
import Palette from "react-palette";
import IconComputer from "../Icons/IconComputer";
import IconDatabase from "../Icons/IconDatabase";
import { motion, useInView } from "framer-motion";

export default function Skills() {
    const Skill = ({ toolTip = "", image = "", className = "", idx }) => (
        <Palette src={`./Skills/${image}`}>
            {({ data }) => (
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + 0.05 * idx }}
                    className={`tooltip-container h-14 w-14 rounded-full sm:h-20 sm:w-20`}
                >
                    <div
                        // tooltip
                        style={{ backgroundColor: data.vibrant }}
                        className="tooltip select-none"
                    >
                        <span className="text-nowrap capitalize">
                            {toolTip}
                        </span>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05, y: -6 }}
                        className="grid place-items-center"
                    >
                        <img
                            className={`w-5/6 object-contain ${className}`}
                            src={`./Skills/${image}`}
                            alt={toolTip}
                        />
                    </motion.div>
                </motion.div>
            )}
        </Palette>
    );

    const SkillsContainer = ({ skillIcon = <></>, skills = [] }) => (
        <div className="mt-3 flex gap-6">
            <div className="flex flex-col items-center gap-3">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="h-14 w-14 rounded-full bg-gradient-to-b from-gradient-from to-gradient-to p-2 sm:h-20 sm:w-20 sm:p-4"
                >
                    {skillIcon}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileInView={{ opacity: 1, height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className=" w-1 rounded-full bg-gradient-to-t from-gradient-from to-gradient-to"
                ></motion.div>
            </div>

            <div className="flex flex-1 flex-wrap gap-3">
                {skills.map((x, i) => (
                    <Skill
                        idx={i}
                        toolTip={x.name}
                        image={x.image}
                        className={x.className}
                    />
                ))}
            </div>
        </div>
    );

    return (
        <>
            <Wave className="mt-12 translate-y-1 fill-bg-green" />
            <div className="bg-bg-green px-4 pb-8">
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="container flex max-w-6xl items-center gap-4 max-sm:py-4 sm:px-4"
                >
                    <IconSchool className="w-12 xl:w-section-icon" />
                    <p className="text-3xl font-bold text-text-primary/95 sm:text-title">
                        Skills
                    </p>
                </motion.div>

                <div className="container max-w-6xl sm:mt-16 sm:px-4">
                    <SkillsContainer
                        skillIcon={
                            <IconWeb className="h-full w-full fill-bg-green" />
                        }
                        skills={[
                            { image: "html.svg", name: "HTML" },
                            { image: "css.svg", name: "CSS" },
                            { image: "js.webp", name: "JS" },
                            { image: "jquery.svg", name: "jQuery" },
                            { image: "bootstrap.webp", name: "bootstrap" },
                            { image: "tailwind.webp", name: "tailwindcss" },
                            { image: "scss.webp", name: "scss" },
                            {
                                image: "mantine.webp",
                                name: "mantine.dev",
                                className: "rounded-full",
                            },
                            { image: "php.webp", name: "PHP" },
                            { image: "react.webp", name: "react" },
                            { image: "laravel.webp", name: "laravel" },
                            { image: "inertia.svg", name: "inertiajs" },
                            {
                                image: "filament.webp",
                                name: "filament",
                                className: "rounded-full",
                            },
                            { image: "livewire.webp", name: "livewire" },
                            {
                                image: "alphine.webp",
                                name: "alphine.JS",
                                className: "rounded-full",
                            },
                            { image: "vite.svg", name: "vite" },
                            { image: "vitest.svg", name: "vitest" },
                            {
                                image: "phpunit.webp",
                                name: "PHPUnit",
                                className: "rounded-full",
                            },
                            { image: "playwright.webp", name: "playwright" },
                            {
                                image: "puppeteer.webp",
                                name: "puppeteer",
                                className: "rounded-full",
                            },
                        ]}
                    />
                    <SkillsContainer
                        skillIcon={
                            <IconComputer className="h-full w-full fill-bg-green" />
                        }
                        skills={[
                            { image: "apache.webp", name: "apache" },
                            { image: "nginx.svg", name: "nginx" },
                            { image: "linux.webp", name: "linux admin" },
                            { image: "node.svg", name: "node.JS" },
                            {
                                image: "npm.webp",
                                name: "npm",
                                className: "lowercase",
                            },
                            { image: "cplusplus.webp", name: "c++" },
                            { image: "csharp.webp", name: "c#" },
                            { image: "python.webp", name: "python" },
                            { image: "postman.webp", name: "postman" },
                        ]}
                    />
                    <SkillsContainer
                        skillIcon={
                            <IconDatabase className="h-full w-full fill-bg-green" />
                        }
                        skills={[
                            { image: "sqlite.webp", name: "sqlite" },
                            { image: "mysql.webp", name: "mysql" },
                        ]}
                    />
                </div>
            </div>
            <Wave className="-translate-y-1 rotate-180 fill-bg-green" />
        </>
    );
}
