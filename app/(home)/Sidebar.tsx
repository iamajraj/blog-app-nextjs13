import React from "react";
import SocialLinks from "../(shared)/SocialLinks";
import Subscribe from "../(shared)/Subscribe";
import Ad2 from "public/assets/ad-2.png";
import AboutProfile from "public/assets/about-profile.jpg";
import Image from "next/image";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="bg-wh-900 px-5 text-wh-50 text-center py-3 text-xs font-bold">
        Subscribe and Folow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <Image
        src={Ad2}
        alt={"ad2"}
        className="object-cover hidden md:block my-8 w-full"
        placeholder="blur"
        width={500}
        height={1000}
      />
      <h4 className="bg-wh-900 px-5 text-wh-50 text-center py-3 text-xs font-bold">
        About the Blog
      </h4>
      <div className="flex justify-center my-3">
        <Image
          src={AboutProfile}
          alt={"profile"}
          placeholder="blur"
          style={{ width: "300px", height: "200px", objectFit: "cover" }}
        />
      </div>
      <h4 className="px-5 text-wh-500 text-center py-3 font-bold">
        Geoffrey Epstein
      </h4>
      <p className="text-center text-wh-500 text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos dicta
        asperiores minima, reiciendis sapiente harum!
      </p>
    </section>
  );
};

export default Sidebar;
