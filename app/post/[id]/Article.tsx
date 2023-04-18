import React from "react";
import EditorMenuBar from "./EditorMenu";
import { EditorContent, Editor } from "@tiptap/react";

type Props = {
  isEditable: boolean;
  editor: Editor | null;
  contentError: string;
  setContent: (content: string) => void;
  title: string;
};

const Article = ({ editor, isEditable, contentError }: Props) => {
  if (!editor) {
    return null;
  }
  return (
    <article className="text-wh-500 leading-8">
      <div
        className={
          isEditable ? "border-2 rounded-md bg-wh-50 p-3" : "w-full max-w-full"
        }
      >
        {isEditable && (
          <>
            <EditorMenuBar editor={editor} />
            <hr className="border-1 mt-1 mb-5" />
          </>
        )}
        <EditorContent editor={editor} />
      </div>
      {contentError && <p className="mt-1 text-wh-900">{contentError}</p>}
    </article>
  );
};

export default Article;
