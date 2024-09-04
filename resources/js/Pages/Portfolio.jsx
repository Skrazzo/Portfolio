import React, { Suspense } from "react";
import Nav from "./Components/Nav";
import PictureTitle from "./Components/PictureTitle";
import AboutMe from "./Components/AboutMe";

// Lazy load components
const Skills = React.lazy(() => import("./Components/Skills"));
const MyProjects = React.lazy(() => import("./Components/MyProjects"));
const Timeline = React.lazy(() => import("./Components/Timeline"));
const Reviews = React.lazy(() => import("./Components/Reviews"));
const TipTap = React.lazy(() => import("./Components/TipTap"));

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

                {/* Wrap lazy-loaded components in Suspense */}
                <Suspense fallback={<div>Loading...</div>}>
                    <section id="skills">
                        <Skills />
                    </section>
                    <section id="projects">
                        <MyProjects projects={projects} />
                    </section>
                    <section id="timeline">
                        <Timeline />
                    </section>
                    <section
                        id="reviews"
                        className="pb-16 shadow-footer shadow-black/15"
                    >
                        <Reviews reviews={reviews} />
                    </section>
                </Suspense>
            </div>

            <div className="h-[570px] bg-transparent sm:h-[600px]"></div>

            <Suspense fallback={<div>Loading contact section...</div>}>
                <section id="contact" className="-z-10">
                    <TipTap />
                </section>
            </Suspense>
        </>
    );
}
