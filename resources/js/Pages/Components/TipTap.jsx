import "../../../scss/tiptap.scss";

import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

import emailjs from "@emailjs/browser";
import TypeComponent from "./TypeComponent";
import IconMessages from "../Icons/IconMessages";

// define your extension array

const content = "<p>Hello World!</p>";

const MenuBar = () => {
    const { editor } = useCurrentEditor();

    if (!editor) {
        return null;
    }

    function send() {
        let data = {
            message: "" + editor.getHTML() + "",
            email: "hello@world.com",
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
            <div className="button-group">
                <button onClick={send}>Send</button>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                    className={editor.isActive("bold") ? "is-active" : ""}
                >
                    Bold
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={
                        !editor.can().chain().focus().toggleItalic().run()
                    }
                    className={editor.isActive("italic") ? "is-active" : ""}
                >
                    Italic
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={
                        !editor.can().chain().focus().toggleStrike().run()
                    }
                    className={editor.isActive("strike") ? "is-active" : ""}
                >
                    Strike
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={!editor.can().chain().focus().toggleCode().run()}
                    className={editor.isActive("code") ? "is-active" : ""}
                >
                    Code
                </button>
                <button
                    onClick={() => editor.chain().focus().unsetAllMarks().run()}
                >
                    Clear marks
                </button>
                <button
                    onClick={() => editor.chain().focus().clearNodes().run()}
                >
                    Clear nodes
                </button>
                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={editor.isActive("paragraph") ? "is-active" : ""}
                >
                    Paragraph
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 1 }).run()
                    }
                    className={
                        editor.isActive("heading", { level: 1 })
                            ? "is-active"
                            : ""
                    }
                >
                    H1
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 2 }).run()
                    }
                    className={
                        editor.isActive("heading", { level: 2 })
                            ? "is-active"
                            : ""
                    }
                >
                    H2
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 3 }).run()
                    }
                    className={
                        editor.isActive("heading", { level: 3 })
                            ? "is-active"
                            : ""
                    }
                >
                    H3
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 4 }).run()
                    }
                    className={
                        editor.isActive("heading", { level: 4 })
                            ? "is-active"
                            : ""
                    }
                >
                    H4
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 5 }).run()
                    }
                    className={
                        editor.isActive("heading", { level: 5 })
                            ? "is-active"
                            : ""
                    }
                >
                    H5
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 6 }).run()
                    }
                    className={
                        editor.isActive("heading", { level: 6 })
                            ? "is-active"
                            : ""
                    }
                >
                    H6
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleBulletList().run()
                    }
                    className={editor.isActive("bulletList") ? "is-active" : ""}
                >
                    Bullet list
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleOrderedList().run()
                    }
                    className={
                        editor.isActive("orderedList") ? "is-active" : ""
                    }
                >
                    Ordered list
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleCodeBlock().run()
                    }
                    className={editor.isActive("codeBlock") ? "is-active" : ""}
                >
                    Code block
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleBlockquote().run()
                    }
                    className={editor.isActive("blockquote") ? "is-active" : ""}
                >
                    Blockquote
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().setHorizontalRule().run()
                    }
                >
                    Horizontal rule
                </button>
                <button
                    onClick={() => editor.chain().focus().setHardBreak().run()}
                >
                    Hard break
                </button>
                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().chain().focus().undo().run()}
                >
                    Undo
                </button>
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().chain().focus().redo().run()}
                >
                    Redo
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().setColor("#958DF1").run()
                    }
                    className={
                        editor.isActive("textStyle", { color: "#958DF1" })
                            ? "is-active"
                            : ""
                    }
                >
                    Purple
                </button>
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

    return (
        <div className="shadow-footer fixed bottom-0 h-96 w-full bg-bg-footer shadow-black/15">
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

                <div className="mt-6 grid grid-cols-3 sm:mt-12">
                    <div className="col-span-2">
                        <EditorProvider
                            slotBefore={<MenuBar />}
                            extensions={extensions}
                            content={content}
                        ></EditorProvider>
                    </div>
                </div>
            </div>
        </div>
    );
}
