import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute bg-gradient-to-r from-black text-white">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{`${overview.substr(0, 150)}...`}</p>
      <div className="flex">
        <button className="flex items-center bg-white text-black p-2 px-10 text-xl hover:bg-opacity-75 rounded-lg">
          <PlayIcon className=" h-4 w-4 mx-2" /> Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-2 px-10 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
