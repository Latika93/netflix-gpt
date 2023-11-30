import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addMovie } from '../utils/movieSlice';
import { API_KEY } from '../utils/contants';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getMovies = async () => {
      const movies = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_KEY);
      const data = await movies.json();
      console.log("dataresults from Browse", data.results);
      dispatch(addMovie(data.results))
    }
  
    useEffect(() => {
      getMovies();
  
    }, [])
}

export default useNowPlayingMovies