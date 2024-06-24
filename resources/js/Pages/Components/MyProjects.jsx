import React, { Suspense, useEffect, useRef, useState } from "react";
import TypeComponent from "./TypeComponent";
import IconDeployedCode from "../Icons/IconDeployedCode";
import IconChevron from "../Icons/IconChevron";
import PlyrComponent from "./PlyrComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import IconGithub from "../Icons/IconGithub";
import IconClick from "../Icons/IconClick";
import { motion } from "framer-motion";

export default function MyProjects({ projects }) {
    const ProjectContainer = ({
        icon,
        title,
        tech = [],
        description,
        showcaseUrl,
        githubUrl = "",
        demoUrl = "",
    }) => {
        // Description -b means bold -n means newline
        // Replace -b with strong tags
        let matches = description.match(/\w{1,}(?=-b)/gim);
        if (matches) {
            matches.forEach((match) => {
                description = description.replace(
                    `${match}-b`,
                    `<strong>${match}</strong>`,
                );
            });
        }

        // Repalace -n with new lines
        let paragraphs = description.split("-n");

        // lazy load the icon
        const Icon = React.lazy(() => import(`../Icons/Icon${icon}.jsx`));

        return (
            <div className="flex-1 px-2 sm:px-4">
                <div className="flex items-center gap-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <Suspense fallback={"Loading..."}>
                            <Icon className="w-16 fill-icon-project max-lg:w-12 max-sm:w-10" />
                        </Suspense>
                    </motion.div>
                    <div className="flex w-full items-center gap-4 overflow-hidden max-lg:justify-between">
                        <motion.p
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="text-4xl font-medium text-bg-green-light/95 max-lg:text-2xl max-lg:font-bold"
                        >
                            {title}
                        </motion.p>
                        <div className="flex items-center gap-4">
                            {tech.map((skill, idx) => (
                                <motion.img
                                    initial={{ opacity: 0, scale: 0, x: -50 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.7 + 0.05 * idx }}
                                    key={idx}
                                    className="w-8 rounded-md object-contain max-sm:w-6 max-xsm:hidden"
                                    src={`./Skills/${skill}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:pl-18">
                    <div className="grid grid-cols-1 gap-4 lg:mt-6 lg:grid-cols-2">
                        <div className="flex flex-col gap-4 max-lg:order-2 max-lg:flex-col-reverse">
                            <section>
                                {paragraphs.map((p, idx) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: -50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                        key={idx}
                                        className="mt-8 select-none text-xl leading-snug text-description first:mt-0 lg:text-project-description"
                                        dangerouslySetInnerHTML={{
                                            __html: p,
                                        }}
                                    />
                                ))}
                            </section>
                            <div className="flex gap-2">
                                {githubUrl && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ y: 4 }}
                                            onClick={() =>
                                                window.open(githubUrl, "_blank")
                                            }
                                            className="flex items-center justify-center gap-2 rounded-lg bg-bg-green px-2 py-1 text-sm font-bold text-gradient-from shadow-lg  max-sm:flex-1 sm:text-base lg:text-xl "
                                        >
                                            <IconGithub className="text-gradient-from/65" />
                                            <span>GitHub</span>
                                        </motion.button>
                                    </motion.div>
                                )}
                                {demoUrl && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ y: 4 }}
                                            onClick={() =>
                                                window.open(demoUrl, "_blank")
                                            }
                                            className="flex items-center justify-center gap-2 rounded-lg bg-bg-green px-2 py-1 text-sm font-bold text-gradient-from shadow-lg max-sm:flex-1 sm:text-base lg:text-xl "
                                        >
                                            <IconClick className=" text-gradient-from/65" />
                                            <span>Visit</span>
                                        </motion.button>
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        <div className="overflow-hidden">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="overflow-hidden rounded-lg shadow-xl"
                            >
                                <PlyrComponent
                                    sources={{
                                        type: "video",
                                        sources: [
                                            {
                                                src: showcaseUrl,
                                                type: "video/mp4",
                                            },
                                        ],
                                    }}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const CarouselBreakPoints = {
        main: {
            breakpoint: { min: 0, max: 9999 },
            items: 1,
        },
    };

    const CarouselRef = useRef(null);

    const CustomDot = ({ onClick, ...rest }) => {
        const {
            onMove,
            active,
            carouselState: { currentSlide, deviceType },
        } = rest;

        return (
            <button
                className={`${active ? "carousel-btn-active" : "carousel-btn"} ml-1 first:ml-0`}
                onClick={() => onClick()}
            >
                <div className="bg"></div>
            </button>
        );
    };

    return (
        <>
            <div className="mt-2 flex min-h-[500px]">
                <div
                    className="grid place-items-center max-lg:hidden"
                    onClick={() => CarouselRef.current.previous()}
                >
                    <IconChevron className="cursor-pointer fill-bg-green-light/70 duration-200 hover:scale-125 hover:fill-bg-green-light active:-translate-x-2 active:scale-100" />
                </div>

                <Carousel
                    ref={CarouselRef}
                    responsive={CarouselBreakPoints}
                    arrows={false}
                    className="flex-1 pb-12"
                    swipeable={true}
                    infinite
                    showDots
                    customDot={<CustomDot />}
                >
                    {projects.map((project, idx) => (
                        <ProjectContainer {...project} key={idx} />
                    ))}
                </Carousel>

                <div
                    className="grid place-items-center max-lg:hidden"
                    onClick={() => CarouselRef.current.next()}
                >
                    <IconChevron className="rotate-180 cursor-pointer fill-bg-green-light/70 duration-200 hover:scale-125 hover:fill-bg-green-light active:translate-x-2 active:scale-100" />
                </div>
            </div>
        </>
    );
}
