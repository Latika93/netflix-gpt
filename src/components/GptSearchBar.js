import React from 'react'
import lang from '../utils/langConstants'
import {useSelector} from 'react-redux';

const GptSearchBar = () => {
    const selectedLanguage = useSelector((store) => store.config.language);
    return (
        <div className='pt-[5%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12'>
                <input
                    type='text'
                    className='p-4 m-4 col-span-9'
                    placeholder={lang[selectedLanguage].gptSearchPlaceholder}
                />
                <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>
                    {lang[selectedLanguage].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar