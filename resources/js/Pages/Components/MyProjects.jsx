import React from "react";
import TypeComponent from "./TypeComponent";
import IconDeployedCode from "../Icons/IconDeployedCode";

export default function MyProjects() {
    return (
        <>
            <div className="container flex max-w-6xl items-center gap-4 max-sm:py-4 sm:px-4">
                <IconDeployedCode className="w-12 fill-bg-green-light/70 xl:w-section-icon" />
                <TypeComponent
                    sequence={["My best projects"]}
                    className="font-bold text-bg-green-light"
                />
            </div>
        </>
    );
}
