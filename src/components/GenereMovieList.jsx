import React from "react";
import GenerasList from "./Constant/GenerasList";
import MovieList from "./MovieList";

const GenereMovieList = () => {
  return (
    <div>
      {GenerasList.genres.map(
        (item, index) =>
          index <= 5 && (
            <div className="p-8 px-8 md:px-16" key={index}>
              <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
              <MovieList genereID={item.id} indexValue={index} />
            </div>
          )
      )}
    </div>
  );
};

export default GenereMovieList;
