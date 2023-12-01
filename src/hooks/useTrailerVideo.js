import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailer } from '../utils/movieSlice';
import { API_KEY } from '../utils/contants';

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_KEY);

    const movie = await data.json();
    const filterData = movie.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length > 0 ? filterData[0] : movie.results[0];
    
    dispatch(addTrailer(trailer));
  }

  useEffect(() => {
    getMovieVideos();
  }, [])
}

export default useTrailerVideo