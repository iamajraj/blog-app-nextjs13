import React from "react";
import { FormattedPost } from "../../types";
import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
  post: FormattedPost;
  handleIsEditable: (bool: boolean) => void;
  isEditable: boolean;
};

const CategoryAndEdit = ({ post, handleIsEditable, isEditable }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
        {post.category}
      </h4>
      <div className="mt-4">
        {isEditable ? (
          <div className="flex justify-between gap-3">
            <button onClick={() => handleIsEditable(false)}>
              <XMarkIcon className="h-6 w-6 text-accent-red" />
            </button>
          </div>
        ) : (
          <button onClick={() => handleIsEditable(true)}>
            <PencilSquareIcon className="h-6 w-6 text-accent-red" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryAndEdit;
