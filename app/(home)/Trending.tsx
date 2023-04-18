import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Post } from "@prisma/client";

type TrendingCardProps = {
  className?: string;
  post: Post;
};

const TredingCard = ({ className, post }: TrendingCardProps) => {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
    >
      <div className="z-0 relative w-full h-full">
        <Image
          src={post.image}
          fill
          alt={post.title}
          className="object-cover"
          placeholder="blur"
          sizes="(max-width: 480px) 100vw,
          (max-width: 768px) 75vw,
          (max-width: 1060px) 50vh,
          33vh"
        />
      </div>
      <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual"></div>
      <div className="absolute z-2 bottom-0 left-0 p-3">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
          {post.category}
        </h4>
        <p className="text-wh-100 mt-2">{post.title}</p>
      </div>
    </Link>
  );
};

type Props = {
  trendingPosts: Array<Post>;
};

const Trending = ({ trendingPosts }: Props) => {
  return (
    <section className="pt-3 pb-10">
      <div className="flex items-center gap-3">
        <div className="bg-wh-900 text-wh-10 px-8 py-2 text-sm font-bold">
          TRENDING
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          adipisci unde perferendis iusto dolore est.
        </p>
      </div>
      <div className="sm:grid grid-cols-4 grid-rows-2 gap-5 sm:h-[600px] my-3">
        <TredingCard
          post={trendingPosts[0]}
          className="col-span-2 row-span-2 bg-wh-500"
        />
        <TredingCard
          post={trendingPosts[1]}
          className="col-span-2 row-span-1 bg-wh-500"
        />
        <TredingCard
          post={trendingPosts[2]}
          className="col-span-1 row-span-1 bg-wh-500"
        />
        <TredingCard
          post={trendingPosts[3]}
          className="col-span-1 row-span-1 bg-wh-500"
        />
      </div>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis qui
        enim illo tempore accusantium totam minus repudiandae modi eius facere!
      </p>
    </section>
  );
};

export default Trending;
