import React, { useEffect, useRef, useState } from "react";
import GlobalAPI from "../services/GlobalAPI";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getTrendiesMovies();
  }, []);

  const getTrendiesMovies = () => {
    try {
      GlobalAPI.getTrendiesVideos().then((res) => {
        setMovieList(res.data.results);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const elementRef = useRef();
  const scrollToRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const scrollToLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <>
      <div>
        <HiChevronLeft
          className="hidden md:block text-white
         text-[30px] cursor-pointer absolute mx-8 mt-40"
          onClick={() => scrollToLeft(elementRef.current)}
        />
        <HiChevronRight
          className="hidden md:block text-white 
        text-[30px] cursor-pointer absolute right-0 mx-8 mt-40"
          onClick={() => scrollToRight(elementRef.current)}
        />
      </div>
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth border-spacing-1 "
        ref={elementRef}
      >
        {movieList.map((item, index) => {
          return (
            <img
              key={index}
              src={IMAGE_BASE_URL + item.backdrop_path}
              alt={item.title}
              className="min-w-full md:h-[310px] object-cover 
              object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400  transition-all ease-in duration-100"
            />
          );
        })}
      </div>
    </>
  );
};

export default Slider;
