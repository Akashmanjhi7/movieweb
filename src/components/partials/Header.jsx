import React from 'react'
import { Link } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
const Header = ({wallpaper}) => {
  
  return (
    <div style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${wallpaper.backdrop_path || wallpaper.poster_path})`,

        backgroundPosition:'top 15',
        backgroundSize:'cover',
        backgroundRepeat : 'no-repeat',
        hover:{scale:0.75}

    }
   
    } 
    className='h-[50vh] w-full flex-col flex justify-end items-start text-white  p-5'>
   
    <h1 className='text-5xl  font-black' >{ wallpaper.original_title || wallpaper.name || wallpaper.title || wallpaper.original_name}</h1>
    <h2 className='w-1/4 py-2 text-zinc-300'>{wallpaper.overview.slice(0,200)}...<Link className='font-bold text-blue-400'>more</Link>   </h2>
    <h3 className='font-bold flex gap-2'>
      <p><i className="ri-megaphone-fill text-yellow-400"> </i> {wallpaper.release_date || "N/A"}</p>
      <p><i className="ri-album-fill text-yellow-400"> </i> {wallpaper.media_type.toUpperCase()}</p>
    </h3>
    <Link className='bg-[#6556CD] font-semibold  px-4 py-2 mt-2 rounded-md' >
      Watch Trailer
    </Link>
 
    </div>
  )
}

export default Header
