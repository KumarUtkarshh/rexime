"use client";

import { Color } from "@tiptap/extension-color";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Toolbar } from "./Toolbar";

// // The initial content from your screenshot
// const initialContent = `
//   <h2>Aspiring software developer with 4+ years of experience</h2>
//   <p>in app and web development, building full-stack projects with React, Firebase, and Flutter. Passionate about solving real-world problems and seeking impactful roles in globally recognized tech companies.</p>
// `;

const TiptapEditor = ({
  content,
  onContentChange,
}: {
  content?: string;
  onContentChange: (html: string) => void;
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
      }),
      Image.configure({
        inline: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      TextStyle,
      Color,
    ],
    content: content,
    editorProps: {
      attributes: {
        class: "tiptap-editor", // Use the class from globals.css
      },
    },
    onUpdate: ({ editor }) => {
      onContentChange(editor.getHTML());
    },

    immediatelyRender: false,
  });

  return (
    <div className="text-white">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
