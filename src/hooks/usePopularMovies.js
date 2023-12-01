import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addPopularMovie } from '../utils/movieSlice';
import { API_KEY } from '../utils/contants';

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const movies = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_KEY);
    const data = await movies.json();
    
    dispatch(addPopularMovie(data.results))
  }

  useEffect(() => {
    getMovies();
  }, [])
}

export default usePopularMovies