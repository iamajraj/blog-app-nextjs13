import React from "react";

type Props = {};

const Subscribe = (props: Props) => {
  return (
    <div className="text-center bg-wh-10 px-5 py-10">
      <h4 className="font-semibold text-base">Subscribe to our Newsletter</h4>
      <p className="text-wh-500 my-3 w-5/6 mx-auto">
        Enter email address to get top news and great deals
      </p>
      <input
        type="text"
        className="text-center w-5/6 min-w-[100px] px-5 py-2 border-2"
        placeholder="Enter email address"
      />
      <button className="bg-accent-red px-5 py-2 mt-3 font-semibold text-wh-10 w-5/6 min-w-[100px]">
        Subscribe
      </button>
    </div>
  );
};

export default Subscribe;
