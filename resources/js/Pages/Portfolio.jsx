import React from "react";
import IconEarth from "./Icons/IconEarth";
import Nav from "./Components/Nav";
import PictureTitle from "./Components/PictureTitle";
import Wave from "./Icons/Wave1";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import MyProjects from "./Components/MyProjects";

export default function Portfolio({ projects }) {
    return (
        <>
            <div className="bg-bg-green">
                <Nav />
                <PictureTitle />
            </div>
            <section id="aboutme">
                <AboutMe />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="projects">
                <MyProjects projects={projects} />
            </section>
            <div className="my-36"></div>
        </>
    );
}
