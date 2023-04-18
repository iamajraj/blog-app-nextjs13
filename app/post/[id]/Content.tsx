"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { FormattedPost } from "../../types";
import Image from "next/image";
import SocialLinks from "../../(shared)/SocialLinks";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CategoryAndEdit from "./CategoryAndEdit";
import Article from "./Article";

type Props = {
  post: FormattedPost;
};

const Content = ({ post }: Props) => {
  const [isEditable, setIsEditable] = useState(false);

  const [title, setTitle] = useState<string>(post.title);
  const [titleError, setTitleError] = useState<string>("");

  const [content, setContent] = useState<string>(post.content);
  const [contentError, setContentError] = useState<string>("");

  const handleIsEditable = (bool: boolean) => {
    setIsEditable(bool);
    editor?.setEditable(bool);

    // if close
    if (!bool) {
      setTitle(post.title);
      setContent(post.content);
      editor?.commands.setContent(post.content);
    }
  };
  const handleTitleChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    if (title) setTitleError("");
    setTitle(ev.target.value);
  };

  const handleOnChangeContent = ({ editor }: any) => {
    if (!(editor as Editor).isEmpty) setContentError("");
    setContent((editor as Editor).getHTML());
  };

  const editor = useEditor({
    content: content,
    extensions: [StarterKit],
    onUpdate: handleOnChangeContent,
    editable: isEditable,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm xl:prose-2xl leading-8 focus:outline-none w-full max-w-full",
      },
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title === "") setTitleError("This is field is required");
    if (editor?.isEmpty) setContentError("This field is required");
    if (title === "" || editor?.isEmpty) return;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/post/${post?.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
        }),
      }
    );

    const data = await response.json();
    handleIsEditable(false);
    setTitle(data.title);
    setContent(data.content);
    editor?.commands.setContent(data.content);
  };

  const date = new Date(post.createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" } as any;
  const formattedDate = date.toLocaleDateString("en-Us", options);

  return (
    <div className="prose w-full max-w-full mb-10">
      <h5 className="text-wh-300">{`Home > ${post.category} > ${post.title}`}</h5>
      <CategoryAndEdit
        handleIsEditable={handleIsEditable}
        isEditable={isEditable}
        post={post}
      />
      <form onSubmit={handleSubmit}>
        {/* HEADER */}
        <>
          {isEditable ? (
            <div>
              <textarea
                className="border-2 rounded-md bg-wh-50 p-3 w-full"
                placeholder="Title"
                value={title}
                onChange={handleTitleChange}
              />
              {titleError && <p className="mt-1 text-wh-500">{titleError}</p>}
            </div>
          ) : (
            <h3 className="font-bold text-3xl mt-3">{title}</h3>
          )}
          <div className="flex gap-3">
            <h5 className="font-semibold text-xs">By {post.author}</h5>
            <h6 className="text-wh-300 text-xs">{formattedDate}</h6>
          </div>
        </>

        <div className="relative w-auto mt-2 mb-16 h-96">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 480px) 100vw,
          (max-width: 768px) 85vw,
          (max-width: 1060px) 75vw,
          60vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Article */}
        <Article
          editor={editor}
          isEditable={isEditable}
          contentError={contentError}
          setContent={setContent}
          title={title}
        />

        {/* Submit button */}
        {isEditable && (
          <div className="flex justify-end">
            <button className="bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold py-2 px-5 mt-5">
              Submit
            </button>
          </div>
        )}
      </form>

      <div className="hidden md:block mt-10 w-1/3">
        <SocialLinks isDark />
      </div>
    </div>
  );
};

export default Content;
