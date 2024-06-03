import React, { Suspense, useEffect, useState } from "react";
import TypeComponent from "./TypeComponent";
import IconDeployedCode from "../Icons/IconDeployedCode";
import IconChevron from "../Icons/IconChevron";

export default function MyProjects() {
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
        const Icon = React.lazy(() => import(`../Icons/Icon${icon}`));

        return (
            <div className="flex-1 sm:px-4">
                <div className="flex items-center gap-2">
                    <Suspense fallback={"Loading..."}>
                        <Icon className="w-16 fill-icon-project" />
                    </Suspense>
                    <p className="text-4xl font-medium text-bg-green-light/95">
                        {title}
                    </p>
                </div>

                <div className="pl-18">
                    <div className="mt-4 flex gap-4">
                        {tech.map((skill, idx) => (
                            <img
                                key={idx}
                                className="w-8 rounded-md object-contain"
                                src={`./Skills/${skill}`}
                            />
                        ))}
                    </div>

                    <section className="mt-4">
                        {paragraphs.map((p, idx) => (
                            <div
                                className="text-project-description mt-8"
                                dangerouslySetInnerHTML={{ __html: p }}
                            />
                        ))}
                    </section>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="flex items-center gap-4 px-6 py-3 sm:px-16 sm:py-6">
                <IconDeployedCode className="w-12 fill-bg-green-light/70 xl:w-section-icon" />
                <TypeComponent
                    sequence={["My best projects"]}
                    className="font-bold text-bg-green-light"
                />
            </div>
            <div className="mt-2 flex min-h-[500px] px-4">
                <div className="grid place-items-center">
                    <IconChevron className="cursor-pointer fill-bg-green-light/70 duration-200 hover:scale-125 hover:fill-bg-green-light active:-translate-x-2 active:scale-100" />
                </div>
                <ProjectContainer
                    title={"Memory game"}
                    icon={"Brain"}
                    tech={[
                        "react.png",
                        "laravel.png",
                        "inertia.svg",
                        "tailwind.png",
                        "scss.png",
                    ]}
                    description={`
                        Made with Laravel-b, Breeze-b authentication system, React-b, tailwindcss-b, SCSS-b and combined everything with 
                        Inertia-b.-n This basic memory game has nice animations, dashboard, profile managment, leaderboard, theme 
                        selector and of course, the game itself. It's a nice way of spending half an hour to practice 
                        your memory.`}
                />
                <div className="grid place-items-center">
                    <IconChevron className="rotate-180 cursor-pointer fill-bg-green-light/70 duration-200 hover:scale-125 hover:fill-bg-green-light active:translate-x-2 active:scale-100" />
                </div>
            </div>
        </>
    );
}
