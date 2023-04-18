import Image from "next/image";
import Link from "next/link";
import React from "react";
import Ad from "@/public/assets/ad-1.jpg";
import SocialLinks from "./SocialLinks";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="mb-5">
      <nav className="flex justify-between items-center w-full bg-wh-900 px-10 py-4 text-wh-10">
        <div className="hidden sm:block">
          <SocialLinks />
        </div>
        <div className="flex items-center justify-between gap-10">
          <Link href="/">Home</Link>
          <Link href="/">Trending</Link>
          <Link href="/">About</Link>
        </div>
        <Link href="/">Login</Link>
      </nav>
      <div className="mx-10 mt-5 mb-4 gap-8 flex justify-between">
        <div className="basis-2/3 md:mt-3">
          <h1 className="text-3xl font-bold md:text-5xl">BLOG OF THE FUTURE</h1>
          <p className="text-sm mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            laborum!
          </p>
        </div>
        <div className="basis-full relative w-auto h-32">
          <Image
            src={Ad}
            fill
            sizes="(max-width: 480px) 100vw,
                  (max-width: 768px) 75vw,
                  (max-width: 1060px) 50vh,
                  33vh"
            alt={"ads"}
            className="object-cover"
            placeholder="blur"
          />
        </div>
      </div>
      <hr className="border-1 mx-10" />
    </header>
  );
};

export default Navbar;
