import Link from "next/link";
import React from "react";
import { Post } from "@prisma/client";
import Image from "next/image";

type Props = {
  className?: string;
  imageHeight: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
  post: Post;
};

const Card = ({
  post,
  imageHeight,
  className,
  isLongForm,
  isSmallCard,
}: Props) => {
  const { author, createdAt, id, image, snippet, title } = post ?? {};
  const date = new Date(createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" } as any;
  const formattedDate = date.toLocaleDateString("en-Us", options);
  return (
    <div className={`${className}`}>
      <Link
        href={`${process.env.NEXT_PUBLIC_URL}/post/${id}`}
        className="basis-full hover:opacity-70"
      >
        <div className={`relative w-auto mb-3 ${imageHeight}`}>
          <Image
            src={image}
            fill
            sizes="(max-width: 480px) 100vw,
                  (max-width: 768px) 75vw,
                  (max-width: 1060px) 50vh,
                  33vh"
            alt={title}
            className="object-cover"
            placeholder="blur"
          />
        </div>
      </Link>
      <div className={`basis-full`}>
        <Link href={`${process.env.NEXT_PUBLIC_URL}/post/${id}`}>
          <h4
            className={`font-bold hover:text-accent-green 
            ${isSmallCard ? "text-base" : "text-lg"}
            ${isSmallCard ? "line-clamp-2" : ""}
            `}
          >
            {title}
          </h4>
        </Link>
        <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
          <h5 className="font-semibold text-xs">{author}</h5>
          <h6 className="text-xs text-wh-300">{formattedDate}</h6>
        </div>
        <p
          className={`text-wh-500 ${
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          }`}
        >
          {snippet}
        </p>
      </div>
    </div>
  );
};

export default Card;
