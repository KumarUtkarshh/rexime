"use client";

import { type Editor } from "@tiptap/react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
} from "lucide-react";

type Props = {
  editor: Editor | null;
};

export const Toolbar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-black border border-gray-700 rounded-t-md">
      {/* Basic Formatting */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <Bold className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <Italic className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <Strikethrough className="h-5 w-5" />
      </button>
      {/* Link and Image */}
      {/* <bu
        type="button"tton
        onClick={setLink}
        className={editor.isActive("link") ? "is-active" : ""}
      >
        <Link className="h-5 w-5" />
      </button>
   
     type="button"   <button onClick={addImage}>
        <Image className="h-5 w-5" />
      </button> */}
      {/* Code and Blockquote */}
      {/* <bu
        type="button"tton
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? "is-active" : ""}
      >
        <Code className="h-5 w-5" />
      </button> */}
      {/* <bu
        type="button"tton
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        <Quote className="h-5 w-5" />
      </button> */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        <List className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <ListOrdered className="h-5 w-5" />
      </button>
      {/* <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <Minus className="h-5 w-5" />
      </button> */}
      {/* Headings */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        <Heading1 className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        <Heading2 className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        <Heading3 className="h-5 w-5" />
      </button>
      {/* Text Alignment */}
      <button
        type="button"
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
      >
        <AlignLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={editor.isActive({ textAlign: "center" }) ? "is-active" : ""}
      >
        <AlignCenter className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
      >
        <AlignRight className="h-5 w-5" />
      </button>
      {/* Undo/Redo */}
      {/* <bu
        type="button"tton
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <Undo className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <Redo className="h-5 w-5" />
      </button> */}
      <style jsx>{`
        button {
          @apply p-1.5 rounded-md text-gray-400 hover:bg-gray-800 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed;
        }
        .is-active {
          @apply bg-gray-700 text-white;
        }
      `}</style>
    </div>
  );
};
