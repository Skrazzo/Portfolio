import React from "react";
import IconEarth from "../Icons/IconEarth";
import TypeComponent from "./TypeComponent";
import IconSchool from "../Icons/IconSchool";
import IconDeployedCode from "../Icons/IconDeployedCode";
import IconContactMe from "../Icons/IconContactMe";
import { motion } from "framer-motion";

export default function Nav() {
    const NavLink = ({ text, icon, onClick, idx }) => (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{ once: true }}
            transition={{
                delay: 0.1 * idx,
            }}
            onClick={onClick}
            className={`text-md flex cursor-pointer select-none items-center gap-2 rounded-full text-text-green-light hover:text-text-green xl:text-lg 2xl:text-2xl`}
        >
            {icon}
            <span className="hidden lg:inline">{text}</span>
        </motion.div>
    );

    const scroll = (section) => {
        const s = document.querySelector(`#${section}`);
        s.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <nav className="flex justify-between px-8 py-6 duration-150 max-sm:flex-col max-sm:flex-col-reverse max-sm:gap-4 before-lg:px-12 before-lg:py-8">
            <motion.div
                className="flex items-center gap-4 max-sm:hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
            >
                <IconEarth className="w-12 xl:w-section-icon" />
                <TypeComponent
                    title
                    sequence={[
                        "Hello world",
                        5000,
                        "Welcome to my portfolio",
                        3500,
                        "Hello world",
                    ]}
                />
            </motion.div>

            <div>
                <motion.div
                    initial={{ opacity: [0], y: -100 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        bounce: 0.4,
                        delay: 0.6,
                    }}
                    className="rounded-full border-4 border-bg-green-light bg-bg-green-light/50  max-sm:rounded-3xl "
                >
                    <div className="flex gap-4 overflow-hidden px-4 max-sm:justify-around lg:gap-8 lg:px-8">
                        <NavLink
                            text={"Hello World"}
                            icon={
                                <IconEarth
                                    className={"w-6 max-sm:w-10 lg:w-8"}
                                />
                            }
                            onClick={() => scroll("aboutme")}
                            idx={1}
                        />
                        <NavLink
                            text={"My Skills"}
                            icon={
                                <IconSchool
                                    className={"w-6 max-sm:w-10 lg:w-8"}
                                />
                            }
                            onClick={() => scroll("skills")}
                            idx={2}
                        />
                        <NavLink
                            text={"My Projects"}
                            icon={
                                <IconDeployedCode
                                    className={
                                        "w-6 fill-text-secondary max-sm:w-10 lg:w-8"
                                    }
                                />
                            }
                            onClick={() => scroll("projects")}
                            idx={3}
                        />
                        <NavLink
                            text={"Contact Me"}
                            icon={
                                <IconContactMe
                                    className={"w-6 max-sm:w-10 lg:w-8"}
                                />
                            }
                            onClick={() => scroll("contact")}
                            idx={4}
                        />
                    </div>
                </motion.div>
            </div>
        </nav>
    );
}
