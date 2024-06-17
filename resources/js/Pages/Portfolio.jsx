import React from "react";
import IconEarth from "./Icons/IconEarth";
import Nav from "./Components/Nav";
import PictureTitle from "./Components/PictureTitle";
import Wave from "./Icons/Wave1";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import MyProjects from "./Components/MyProjects";
import Timeline from "./Components/Timeline";
import TipTap from "./Components/TipTap";
import Reviews from "./Components/Reviews";

export default function Portfolio({ projects, reviews }) {
    return (
        <>
            <div className="relative z-10 bg-white">
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
                <section id="timeline">
                    <Timeline />
                </section>
                <section id="reviews" className="pb-16">
                    <Reviews reviews={reviews} />
                </section>
            </div>
            <div className="h-96 bg-transparent"></div>

            <section id="contact" className="-z-10">
                <TipTap />
            </section>
        </>
    );
}
