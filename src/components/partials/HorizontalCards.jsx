import React from 'react'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'


const HorizontalCards = ({ trending }) => {



  return (
    <div className='w-full h-[60vh]  p-5 text-white '>

      <div className='w-[100%] h-[55vh] flex overflow-x-auto overflow-y-hidden '>
        {trending.map((item, index) => (
          <di key={index} className=' w-[100%] lg:w-[22%] h-full relative shrink-0 bg-zinc-900 mx-4 mb-10 rounded-lg opacity-70 hover:opacity-100  overflow-hidden duration-200'>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`}
              alt=""
              className='w-full h-full  object-cover object-center opacity-75 hover:scale-125 duration-200   '
            />
            <div className='absolute bottom-2 px-4  '>
              <h1 className='font-bold text-3xl text-zinc-200 '>{item.name || item.title || item.original_name}</h1>
              <p className='text-zinc-200 text-nowrap lg:opacity-100 flex'>
                {item.overview.slice(0, 25)}...<p className='text-sky-400'>more</p>
              </p>
            </div>
          </di>
        ))}
      </div>
    </div>
  )
}

export default HorizontalCards




// style={{
//   background:` linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path})`,

//   backgroundPosition:'center',
//   backgroundSize:'cover',
//   backgroundRepeat : 'no-repeat',
// }}