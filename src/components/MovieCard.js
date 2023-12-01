import React from 'react'
import { IMG_CDN_URL } from '../utils/contants';

const MovieCard = ({title, poster}) => {
  return (
    <div className='w-48'>
        
        <img src={IMG_CDN_URL + poster} />
    </div>
  )
}

export default MovieCard