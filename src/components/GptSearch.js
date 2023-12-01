import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG_URL } from '../utils/contants'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={BG_IMG_URL} />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch