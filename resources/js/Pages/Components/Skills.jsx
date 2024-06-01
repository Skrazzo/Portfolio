import React from "react";
import Wave from "../Icons/Wave1";
import TypeComponent from "./TypeComponent";
import IconSchool from "../Icons/IconSchool";
import IconWeb from "../Icons/IconWeb";
import Palette from "react-palette";
import IconComputer from "../Icons/IconComputer";
import IconDatabase from "../Icons/IconDatabase";

export default function Skills() {
    const Skill = ({ toolTip = "", image = "", className = "" }) => (
        <Palette src={`./Skills/${image}`}>
            {({ data }) => (
                <div
                    className={`tooltip-container h-14 w-14 rounded-full duration-200 hover:-translate-y-2  hover:scale-105 hover:bg-bg-green-light sm:h-20 sm:w-20`}
                >
                    <div
                        // tooltip
                        style={{ backgroundColor: data.vibrant }}
                        className="tooltip"
                    >
                        <span className="text-nowrap capitalize">
                            {toolTip}
                        </span>
                    </div>
                    <div className="grid place-items-center">
                        <img
                            className={`w-5/6 object-contain ${className}`}
                            src={`./Skills/${image}`}
                        />
                    </div>
                </div>
            )}
        </Palette>
    );

    const SkillsContainer = ({ skillIcon = <></>, skills = [] }) => (
        <div className="mt-3 flex gap-6">
            <div className="flex flex-col items-center gap-3">
                <div className="h-14 w-14 rounded-full bg-gradient-to-b from-gradient-from to-gradient-to p-2 sm:h-20 sm:w-20 sm:p-4">
                    {skillIcon}
                </div>

                <div className="w-1 flex-1 rounded-full bg-gradient-to-t from-gradient-from to-gradient-to"></div>
            </div>

            <div className="flex flex-1 flex-wrap gap-3">
                {skills.map((x, i) => (
                    <Skill
                        key={i}
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
            <div className="bg-bg-green px-4">
                <div className="container flex max-w-6xl items-center gap-4 max-sm:py-4 sm:px-4">
                    <IconSchool className="w-12 xl:w-section-icon" />
                    <TypeComponent
                        sequence={["My skills"]}
                        className="font-bold text-text-primary"
                    />
                </div>

                <div className="container max-w-6xl sm:mt-16 sm:px-4">
                    <SkillsContainer
                        skillIcon={
                            <IconWeb className="h-full w-full fill-bg-green" />
                        }
                        skills={[
                            { image: "html.svg", name: "HTML" },
                            { image: "css.svg", name: "CSS" },
                            { image: "js.png", name: "JS" },
                            { image: "jquery.svg", name: "jQuery" },
                            { image: "bootstrap.png", name: "bootstrap" },
                            { image: "tailwind.png", name: "tailwindcss" },
                            { image: "scss.png", name: "scss" },
                            {
                                image: "mantine.png",
                                name: "mantine.dev",
                                className: "rounded-full",
                            },
                            { image: "php.png", name: "PHP" },
                            { image: "react.png", name: "react" },
                            { image: "laravel.png", name: "laravel" },
                            {
                                image: "filament.png",
                                name: "filament",
                                className: "rounded-full",
                            },
                            { image: "livewire.png", name: "livewire" },
                            {
                                image: "alphine.png",
                                name: "alphine.JS",
                                className: "rounded-full",
                            },
                            { image: "vite.svg", name: "vite" },
                            { image: "vitest.svg", name: "vitest" },
                            {
                                image: "phpunit.png",
                                name: "PHPUnit",
                                className: "rounded-full",
                            },
                            { image: "playwright.png", name: "playwright" },
                            {
                                image: "puppeteer.png",
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
                            { image: "apache.png", name: "apache" },
                            { image: "nginx.svg", name: "nginx" },
                            { image: "linux.png", name: "linux" },
                            { image: "node.svg", name: "node.JS" },
                            {
                                image: "npm.png",
                                name: "npm",
                                className: "lowercase",
                            },
                            { image: "bun.svg", name: "bun" },
                            { image: "cplusplus.png", name: "c++" },
                            { image: "csharp.png", name: "c#" },
                            { image: "python.png", name: "python" },
                            { image: "postman.png", name: "postman" },
                        ]}
                    />
                    <SkillsContainer
                        skillIcon={
                            <IconDatabase className="h-full w-full fill-bg-green" />
                        }
                        skills={[
                            { image: "sqlite.png", name: "sqlite" },
                            { image: "mysql.png", name: "mysql" },
                        ]}
                    />
                </div>
            </div>
        </>
    );
}
