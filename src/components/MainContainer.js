import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoContainer from './VideoContainer';

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return;
    console.log("here", movies);

    const {original_title, overview, id} = movies[0];
    console.log("MAin movie: ", movies[0]);

    return ( 
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoContainer movieId={id} />
        </div>
    )
}

export default MainContainer