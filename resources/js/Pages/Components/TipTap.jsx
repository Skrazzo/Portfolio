import "../../../scss/tiptap.scss";

import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useRef } from "react";

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

// define your extension array

const content = "<p>Hello World!</p>";

const MenuBar = ({ emailRef }) => {
    const { editor } = useCurrentEditor();

    if (!editor) {
        return null;
    }

    function send() {
        const email = emailRef.current.value;
        if (!email.match(/\w{4,}@\w{4,}.\w{2,}/)) {
            alert("Please enter a valid email address");
        }

        let data = {
            message: "" + editor.getHTML() + "",
            email: email,
        };

        emailjs
            .send("service_sp2lrdb", "template_mcwlt1l", data, {
                publicKey: "_x7BiFEZyGo34c-er",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error);
                },
            );
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
    StarterKit.configure({
        bulletList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
    }),
];

export default function TipTap() {
    // const editor = useCurrentEditor();
    const emailRef = useRef(null);

    return (
        <div className="fixed bottom-0 h-[520px] w-full bg-bg-footer">
            <div className="container max-w-screen-2xl px-2">
                <div className="mt-8 flex gap-4 sm:mt-16">
                    <IconMessages className="text-bg-green-light max-sm:w-12" />
                    <TypeComponent
                        sequence={["Let's have a chat"]}
                        // title={false}
                        // className="mt-3 text-3xl font-bold text-bg-green-light/95 sm:mt-[10px] sm:text-title"
                        className="mt-3 font-bold text-bg-green-light/95"
                    />
                </div>

                <div className="mt-6 grid grid-cols-3 items-center gap-x-8 gap-y-4 sm:mt-12">
                    <div className="col-span-2 flex items-center gap-2 rounded-lg border border-text-secondary/35 bg-bg-white px-2 py-1">
                        <IconMail className="h-9 w-9 text-text-secondary/50" />
                        <input
                            type="text"
                            ref={emailRef}
                            className="flex-1 text-xl text-text-dark outline-none"
                            placeholder="Your email address"
                        />
                    </div>
                    <div className="text-project-description font-semibold text-text-dark">
                        Other links
                    </div>

                    <div className="col-span-2 overflow-hidden rounded-lg border border-text-secondary/35 bg-bg-white">
                        <EditorProvider
                            slotBefore={<MenuBar emailRef={emailRef} />}
                            extensions={extensions}
                            content={content}
                        ></EditorProvider>
                    </div>
                    <div className="flex h-full flex-col justify-between ">
                        <FooterLink
                            icon={<IconMail className="h-11 w-11" />}
                            text={"skrazzo@proton.me"}
                            link="mailto:skrazzo@proton.me"
                        />
                        <FooterLink
                            icon={<IconInstagram className="h-11 w-11" />}
                            text={"skrazzo"}
                            link="mailto:skrazzo@proton.me"
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
                            link="mailto:skrazzo@proton.me"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
