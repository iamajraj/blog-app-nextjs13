import React from "react";
import Card from "../(shared)/Card";
import { Post } from "@prisma/client";

type Props = { otherPosts: Array<Post> };

const Other = ({ otherPosts }: Props) => {
  return (
    <section className="pt-4 pb-16">
      <hr className="border-1"></hr>
      <p className="font-bold text-2xl my-8">Other Trending Posts</p>

      <div className="sm:grid grid-cols-2 gap-16">
        <Card
          imageHeight="h-80"
          isLongForm
          className="mt-5 sm:mt-0"
          post={otherPosts[0]}
        />
        <Card
          imageHeight="h-80"
          isLongForm
          className="mt-5 sm:mt-0"
          post={otherPosts[1]}
        />
        <Card
          imageHeight="h-80"
          isLongForm
          className="mt-5 sm:mt-0"
          post={otherPosts[2]}
        />
        <Card
          imageHeight="h-80"
          isLongForm
          className="mt-5 sm:mt-0"
          post={otherPosts[3]}
        />
      </div>
    </section>
  );
};

export default Other;
