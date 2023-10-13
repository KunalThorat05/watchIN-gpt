import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black w-screen">
        <div className="-mt-52 p-4 relative z-10">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />

          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList title={"TopRated"} movies={movies?.topRatedMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies?.upComingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
