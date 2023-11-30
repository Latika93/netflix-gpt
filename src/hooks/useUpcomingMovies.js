import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addMovie, addUpcomingMovies } from '../utils/movieSlice';
import { API_KEY } from '../utils/contants';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const movies = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_KEY);
    const data = await movies.json();
    console.log("dataresults from Browse", data.results);
    dispatch(addUpcomingMovies(data.results))
  }

  useEffect(() => {
    getMovies();

  }, [])
}

export default useUpcomingMovies