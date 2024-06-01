import React from "react";
import IconEarth from "./Icons/IconEarth";
import Nav from "./Components/Nav";
import PictureTitle from "./Components/PictureTitle";
import Wave from "./Icons/Wave1";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";

export default function Portfolio() {
    return (
        <>
            <div className="bg-bg-green">
                <Nav />
                <PictureTitle />
            </div>
            <AboutMe />
            <Skills />
            <div className="my-36"></div>
        </>
    );
}
