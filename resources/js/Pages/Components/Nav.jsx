import React from "react";
import IconEarth from "../Icons/IconEarth";
import TypeComponent from "./TypeComponent";
import IconSchool from "../Icons/IconSchool";
import IconDeployedCode from "../Icons/IconDeployedCode";
import IconContactMe from "../Icons/IconContactMe";

export default function Nav() {
    const NavLink = ({ text, icon }) => (
        <div
            className={`text-text-green-light flex gap-2 hover:text-text-green duration-150 items-center text-2xl select-none cursor-pointer rounded-full`}
        >
            {icon}
            <span>{text}</span>
        </div>
    );

    return (
        <nav className="px-12 py-8 flex justify-between">
            <div className="flex gap-4 items-center">
                <IconEarth />
                <TypeComponent
                    sequence={[
                        "Hello world",
                        5000,
                        "Welcome to my portfolio",
                        3500,
                        "Hello world",
                    ]}
                />
            </div>

            <div className="bg-bg-green-light/50 flex gap-8 px-8 rounded-full border-4 border-bg-green-light">
                <NavLink
                    text={"Hello World"}
                    icon={<IconEarth className={"w-8"} />}
                />
                <NavLink
                    text={"My Skills"}
                    icon={<IconSchool className={"w-8"} />}
                />
                <NavLink
                    text={"My Projects"}
                    icon={<IconDeployedCode className={"w-8"} />}
                />
                <NavLink
                    text={"Contact Me"}
                    icon={<IconContactMe className={"w-8"} />}
                />
            </div>
        </nav>
    );
}
