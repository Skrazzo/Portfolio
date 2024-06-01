import React from "react";
import Wave from "../Icons/Wave1";
import TypeComponent from "./TypeComponent";
import IconSchool from "../Icons/IconSchool";
import IconWeb from "../Icons/IconWeb";

export default function Skills() {
    const Skill = ({ toolTip = "", image = "" }) => (
        <div className="h-20 w-20 rounded-full duration-200 hover:-translate-y-2 hover:scale-105 hover:bg-bg-green-light">
            <img src={`./Skills/${image}`} />
        </div>
    );

    const SkillsContainer = ({ skillIcon = <></>, skills = [] }) => (
        <div className="flex gap-6">
            <div className="flex flex-col items-center gap-4">
                <div className="h-20 w-20 rounded-full bg-gradient-to-b from-gradient-from to-gradient-to p-4">
                    {skillIcon}
                </div>

                <div className="w-1 flex-1 rounded-full bg-gradient-to-t from-gradient-from to-gradient-to"></div>
            </div>

            <div className="flex flex-1 flex-wrap gap-3">
                {skills.map((x, i) => (
                    <Skill key={i} toolTip={x.name} image={x.image} />
                ))}
            </div>
        </div>
    );

    return (
        <>
            <Wave className="mt-12 fill-bg-green" />
            <div className="bg-bg-green px-12">
                <div className="flex items-center gap-4">
                    <IconSchool className="w-12 xl:w-section-icon" />
                    <TypeComponent
                        sequence={["My skills"]}
                        className="font-bold text-text-primary"
                    />
                </div>

                <div className="container mt-12 max-w-6xl px-4">
                    <SkillsContainer
                        skillIcon={
                            <IconWeb className="h-full w-full fill-bg-green" />
                        }
                        skills={new Array(20).fill({
                            image: "scss.png",
                            name: "ReactJS",
                        })}
                    />
                </div>
            </div>
        </>
    );
}
