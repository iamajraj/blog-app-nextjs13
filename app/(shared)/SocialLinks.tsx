import React from "react";
import Image from "next/image";
import Twitter from "@/public/assets/social_twitter.png";
import Facebook from "@/public/assets/social_facebook.png";
import Instagram from "@/public/assets/social_instagram.png";
import Google from "@/public/assets/social_google.png";
import Discord from "@/public/assets/social_discord.png";

type Props = {
  isDark?: boolean;
};

const SocialLinks = ({ isDark }: Props) => {
  return (
    <div className="flex justify-between gap-7 items-center">
      <a href="#">
        <Image
          src={Twitter}
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="twitter"
          width={20}
          height={20}
        />
      </a>
      <a href="#">
        <Image
          src={Facebook}
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="facebook"
          width={20}
          height={20}
        />
      </a>
      <a href="#">
        <Image
          src={Instagram}
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="instagram"
          width={20}
          height={20}
        />
      </a>
      <a href="#">
        <Image
          src={Google}
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="google"
          width={20}
          height={20}
        />
      </a>
      <a href="#">
        <Image
          src={Discord}
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="discord"
          width={20}
          height={20}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
