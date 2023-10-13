import React from "react";

import useMovieTrailer from "../customHooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.nowtrailerVideo);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&?modestbranding=1"
        }
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
