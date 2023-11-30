import React, { useEffect, useState } from 'react'
import { API_KEY } from '../utils/contants'
import {useDispatch, useSelector} from 'react-redux';
import useTrailerVideo from '../hooks/useTrailerVideo';

const VideoContainer = ({movieId}) => {
  const trailerId = useSelector((store) => store.movies?.trailerVideo?.key);
  useTrailerVideo(movieId);

  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerId +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default VideoContainer