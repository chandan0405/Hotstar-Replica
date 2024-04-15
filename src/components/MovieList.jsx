import React, { useEffect, useRef, useState } from "react";
import GlobalAPI from "../services/GlobalAPI";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import HrMovieCard from "./HrMovieCard";

const screenWidth = window.innerWidth;
const MovieList = ({ genereID, indexValue }) => {
  const elementRef = useRef();
  // console the enviornment variable
  console.log(import.meta.env.VITE_APP_MOVIESDB_API_KEYS);
  const scrollToRight = (element) => {
    element.scrollLeft += 500;
  };
  const scrollToLeft = (element) => {
    element.scrollLeft -= 500;
  };
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getMovieByGenre();
  }, []);

  const getMovieByGenre = () => {
    GlobalAPI.getMovieBygenreID(genereID).then((resp) => {
      setMovieList(resp.data.results);
    });
  };
  return (
    <>
      <div>
        <HiChevronLeft
          className={`hidden md:block text-white
         text-[30px] cursor-pointer absolute left-0 ml-12 ${
           indexValue % 3 == 0 ? "mt-20" : " mt-40"
         }`}
          onClick={() => scrollToLeft(elementRef.current)}
        />
        <HiChevronRight
          className={`hidden md:block text-white 
        text-[30px] cursor-pointer absolute right-0 mx-8 ${
          indexValue % 3 == 0 ? "mt-20" : " mt-40"
        }`}
          onClick={() => scrollToRight(elementRef.current)}
        />
      </div>
      <div
        className="flex overflow-x-auto scrollbar-none gap-8 pt-5 px-3 pb-5 scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <>
            {indexValue % 3 == 0 ? (
              <HrMovieCard movie={item} key={index} />
            ) : (
              <MovieCard movie={item} />
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default MovieList;
