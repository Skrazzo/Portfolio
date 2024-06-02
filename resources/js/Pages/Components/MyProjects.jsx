import React, { Suspense, useEffect, useState } from "react";
import TypeComponent from "./TypeComponent";
import IconDeployedCode from "../Icons/IconDeployedCode";
import IconChevron from "../Icons/IconChevron";

export default function MyProjects() {
    const ProjectContainer = ({
        icon,
        title,
        tech = [],
        children,
        showcaseUrl,
        githubUrl = "",
        demoUrl = "",
    }) => {
        function helloWorld() {}

        // lazy load the icon
        const Icon = React.lazy(() => import(`../Icons/Icon${icon}`));

        return (
            <div className="flex-1 sm:px-4">
                <div className="flex items-center gap-2">
                    <Suspense fallback={"Loading..."}>
                        <Icon className="fill-icon-project w-16" />
                    </Suspense>
                    <p className="text-4xl font-medium text-bg-green-light/95">
                        {title}
                    </p>
                </div>

                <div className="pl-18">
                    <div className="flex gap-4">
                        {tech.map((skill) => (
                            <img
                                className="w-8 rounded-full"
                                src={`./Skills/${skill}`}
                            />
                        ))}
                    </div>

                    <div>{children}</div>
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
                        "filament.png",
                    ]}
                >
                    Hello world
                </ProjectContainer>
                <div className="grid place-items-center">
                    <IconChevron className="rotate-180 cursor-pointer fill-bg-green-light/70 duration-200 hover:scale-125 hover:fill-bg-green-light active:translate-x-2 active:scale-100" />
                </div>
            </div>
        </>
    );
}
