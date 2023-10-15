import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-3xl py-2 text-white font-bold">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex ">
          {movies &&
            movies?.map((movie) => (
              <MovieCard posterPath={movie?.poster_path} key={movie.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
