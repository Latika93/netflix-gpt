import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const {userSearch, movies} = useSelector((store) => store.toggle);

  if(!userSearch) return null


  return (
    <div className='bg-black bg-opacity-60'>
      <div>
        {userSearch.map((m_name, index) => (
          <MovieList key={index} title={m_name} movies={movies[index]} />
        ))}
      </div>
      
    </div>
  )
}

export default GptMovieSuggestions