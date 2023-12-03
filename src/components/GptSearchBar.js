import React, { useRef } from 'react'
import lang from '../utils/langConstants'
import {useDispatch, useSelector} from 'react-redux';
import openai from '../utils/openai';
import { API_KEY } from '../utils/contants';
import { addSearchMovies, addUserSearch } from '../utils/gptStore';

const GptSearchBar = () => {
    const dispatch = useDispatch();
    // const searchedMovieData = useSe
    const searchText = useRef(null);

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
          "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
            API_KEY
        );
        const json = await data.json();
    
        return json.results;
      };

    const handleClick = async () => {
        console.log(searchText.current.value);
        const query = "Act like a movie recommendation System, for the query : " + searchText.current.value + ". Please give 5 movie name, Comma separated. For example: Twilight, Harry potter, Thappad, Karan arjun and Sholay."
        //Make opne ai call
        // const chatCompletion = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: query }],
        //     model: 'gpt-3.5-turbo',
        // });
        const movies = searchText.current.value.split(",");;
        const promiseArray = movies.map((movie) => searchMovieTMDB(movie));

        const tmdb = await Promise.all(promiseArray);
        dispatch(addSearchMovies(tmdb));
        dispatch(addUserSearch(movies));
        console.log(tmdb);
    }

    const selectedLanguage = useSelector((store) => store.config.language);
    return (
        <div className='pt-[5%] flex justify-center'>
            <form className=' w-full sm:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                <input
                    type='text'
                    className='p-4 m-4 col-span-9'
                    placeholder={lang[selectedLanguage].gptSearchPlaceholder}
                    ref={searchText}
                />
                <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleClick}>
                    {lang[selectedLanguage].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar