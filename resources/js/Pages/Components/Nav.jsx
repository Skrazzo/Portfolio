import React from "react";
import IconEarth from "../Icons/IconEarth";
import TypeComponent from "./TypeComponent";
import IconSchool from "../Icons/IconSchool";
import IconDeployedCode from "../Icons/IconDeployedCode";
import IconContactMe from "../Icons/IconContactMe";

export default function Nav() {
    const NavLink = ({ text, icon }) => (
        <div
            className={`text-md flex cursor-pointer select-none items-center gap-2 rounded-full text-text-green-light duration-150 hover:scale-105 hover:text-text-green xl:text-lg 2xl:text-2xl`}
        >
            {icon}
            <span className="hidden lg:inline">{text}</span>
        </div>
    );

    return (
        <nav className="flex justify-between px-8 py-6 duration-150 max-sm:flex-col max-sm:flex-col-reverse max-sm:gap-4 before-lg:px-12 before-lg:py-8">
            <div className="flex items-center gap-4 max-sm:hidden">
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
            </div>

            <div>
                <div className="flex gap-4 rounded-full border-4 border-bg-green-light bg-bg-green-light/50 px-4 max-sm:justify-around max-sm:rounded-3xl lg:gap-8 lg:px-8">
                    <NavLink
                        text={"Hello World"}
                        icon={
                            <IconEarth className={"w-6 max-sm:w-10 lg:w-8"} />
                        }
                    />
                    <NavLink
                        text={"My Skills"}
                        icon={
                            <IconSchool className={"w-6 max-sm:w-10 lg:w-8"} />
                        }
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
                    />
                    <NavLink
                        text={"Contact Me"}
                        icon={
                            <IconContactMe
                                className={"w-6 max-sm:w-10 lg:w-8"}
                            />
                        }
                    />
                </div>
            </div>
        </nav>
    );
}
