import React from "react";

export default function HrMovieCard({ movie }) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="hover:scale-105 transition-all duration-150 ease-in cursor-pointer">
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        alt={movie.title}
        className="w-[110px] md:w-[260px] rounded-lg 
        hover:border-[3px] border-gray-400 
        "
      />
      <h2 className="w-[110px] md:w-[260px] rounded-lg text-white mt-2 ml-3 font-bold tracking-widest font-[Segoe UI Emoji] ">
        {movie.title}
      </h2>
    </div>
  );
}
