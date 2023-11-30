import React from 'react'

const VideoTitle = ({title, overview}) => {
  function limitParagraph(text, lines = 3) {
    const words = text.split(' ');
    const slicedText = words.slice(0, lines * 8).join(' '); // Assuming an average of 8 words per line
    return words.length > lines * 8 ? `${slicedText}...` : text;
  }
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h2 className='text-3xl font-bold'>{title}</h2>
        <p className='text-lg py-6 w-1/3 '>
        {limitParagraph(overview)}
    </p>

        <div className='flex'>
            <button className="hidden md:inline-block mx-2  bg-white text-black p-4 px-12 text-xl hover:bg-opacity-25 rounded-lg">
                Play
            </button>
            <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle

{/* <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div> */}