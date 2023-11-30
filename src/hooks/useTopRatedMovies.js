import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTopRatedMovie } from '../utils/movieSlice';
import { API_KEY } from '../utils/contants';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const movies = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_KEY);
    const data = await movies.json();
    console.log("dataresults from Browse", data.results);
    dispatch(addTopRatedMovie(data.results))
  }

  useEffect(() => {
    getMovies();
  }, [])
}

export default useTopRatedMovies