import "../../../scss/tiptap.scss";

import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import TypeComponent from "./TypeComponent";
import IconMessages from "../Icons/IconMessages";
import IconBold from "../Icons/IconBold";
import IconMail from "../Icons/IconMail";
import IconItalic from "../Icons/IconItalic";
import IconStrike from "../Icons/IconStrike";
import IconH1 from "../Icons/IconH1";
import IconH2 from "../Icons/IconH2";
import FooterLink from "./FooterLink";
import IconInstagram from "../Icons/IconInstagram";
import IconGithub from "../Icons/IconGithub";
import IconLinkedin from "../Icons/IconLinkedin";
import IconSend from "../Icons/IconSend";
import ReactConfetti from "react-confetti";
import Loader from "./Loader";
import Link from "@tiptap/extension-link";

import { motion } from "framer-motion";
// define your extension array

const content = "<p>Hello World!</p>";

const MenuBar = ({ emailRef, runConfetti, setSending }) => {
    const { editor } = useCurrentEditor();

    if (!editor) {
        return null;
    }

    function send() {
        const email = emailRef.current.value;
        if (!email.match(/[\w|\W]{4,}@[\w|\W]{4,}\.\w{2,}/)) {
            alert("Please enter a valid email address");
            return;
        }

        if (editor.getText() === "Hello World!") return;
        if (editor.getText() === "") return;

        let data = {
            message: "" + editor.getHTML() + "",
            email: email,
        };

        setSending(true);

        emailjs
            .send("service_sp2lrdb", "template_mcwlt1l", data, {
                publicKey: "_x7BiFEZyGo34c-er",
            })
            .then(
                () => {
                    runConfetti();
                    emailRef.current.value = "";
                    editor.commands.clearContent();
                },
                (error) => {
                    alert("FAILED...", error);
                },
            )
            .finally(() => setSending(false));
    }

    return (
        <div className="control-group">
            <div className="button-group border-b border-text-secondary/35">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                    className={
                        editor.isActive("bold")
                            ? "is-active"
                            : "duration-150 active:scale-90"
                    }
                >
                    <IconBold className="h-7 w-7 text-text-dark" />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={
                        !editor.can().chain().focus().toggleItalic().run()
                    }
                    className={
                        editor.isActive("italic")
                            ? "is-active"
                            : "duration-150 active:scale-90"
                    }
                >
                    <IconItalic className="h-7 w-7 text-text-dark" />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={
                        !editor.can().chain().focus().toggleStrike().run()
                    }
                    className={
                        editor.isActive("strike")
                            ? "is-active"
                            : "duration-150 active:scale-90"
                    }
                >
                    <IconStrike className="h-7 w-7 text-text-dark" />
                </button>

                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 1 }).run()
                    }
                    className={
                        editor.isActive("heading", { level: 1 })
                            ? "is-active"
                            : "duration-150 active:scale-90"
                    }
                >
                    <IconH1 className="h-7 w-7 text-text-dark" />
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 2 }).run()
                    }
                    className={
                        editor.isActive("heading", { level: 2 })
                            ? "is-active"
                            : "duration-150 active:scale-90"
                    }
                >
                    <IconH2 className="h-7 w-7 text-text-dark" />
                </button>
                <div
                    className="ml-auto flex cursor-pointer items-center gap-1 rounded border border-text-green/50 bg-text-green/25 p-1  text-text-dark"
                    onClick={send}
                >
                    <IconSend />
                    <span>Send</span>
                </div>
            </div>
        </div>
    );
};

const extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    TextStyle.configure({ types: [ListItem.name] }),
    StarterKit.configure({}),
    Link.configure({
        autolink: false,
    }),
];

export default function TipTap() {
    const emailRef = useRef(null);
    const [confetti, setConfetti] = useState(false);
    const [sending, setSending] = useState(false);

    function runConfetti() {
        setConfetti(true);
    }

    return (
        <div className="fixed bottom-0 h-[570px] w-full bg-bg-footer sm:h-[600px]">
            {confetti && (
                <ReactConfetti
                    onConfettiComplete={() => setConfetti(false)}
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                />
            )}
            <div className="container max-w-screen-2xl px-2 sm:px-4">
                <div className="mt-8 flex gap-4 sm:mt-16">
                    <IconMessages className=" text-bg-green-light max-sm:w-12" />
                    <span className="mt-3 text-3xl font-bold text-bg-green-light/95 sm:text-title">
                        Let's have a chat
                    </span>
                </div>

                <div className="mt-6 grid grid-cols-1 items-center gap-x-8 gap-y-4 sm:mt-12 xl:grid-cols-3">
                    <div className="col-span-2 flex items-center gap-2 rounded-lg border border-text-secondary/35 bg-bg-white px-2 py-1">
                        <IconMail className="h-9 w-9 text-text-secondary/50" />
                        <input
                            type="text"
                            ref={emailRef}
                            className="flex-1 text-xl text-text-dark outline-none"
                            placeholder="Your email address"
                        />
                    </div>
                    <div className="text-project-description font-semibold text-text-dark max-xl:hidden">
                        Other links
                    </div>

                    <div className="relative col-span-2 overflow-hidden rounded-lg border border-text-secondary/35 bg-bg-white">
                        {sending && (
                            <div className="absolute z-10 flex h-full w-full items-center justify-center bg-bg-footer/50">
                                <Loader className="loader h-12 w-12 fill-text-dark text-text-dark" />
                            </div>
                        )}
                        <EditorProvider
                            slotBefore={
                                <MenuBar
                                    emailRef={emailRef}
                                    runConfetti={runConfetti}
                                    setSending={setSending}
                                />
                            }
                            extensions={extensions}
                            content={content}
                        ></EditorProvider>
                    </div>
                    <div className="flex h-full justify-center gap-2 xl:flex-col xl:justify-between ">
                        <FooterLink
                            icon={<IconMail className="h-11 w-11" />}
                            text={"skrazzo@proton.me"}
                            link="mailto:skrazzo@proton.me"
                        />
                        <FooterLink
                            icon={<IconInstagram className="h-11 w-11" />}
                            text={"skrazzo"}
                            link="https://instagram.com/Skrazzo"
                        />
                        <FooterLink
                            icon={
                                <IconGithub
                                    strokeWidth={1}
                                    className="h-11 w-11"
                                />
                            }
                            text={"Skrazzo"}
                            link="https://github.com/Skrazzo"
                        />
                        <FooterLink
                            icon={<IconLinkedin className="h-11 w-11" />}
                            text={"Leons Aleksandrovs"}
                            link="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
