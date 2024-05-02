import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../utils/Axios'

const SideNav = () => {





  return (
    <div className='w-1/5 lg:w-1/5 h-full border-r border-zinc-400 p-10 overflow-auto z-10  '>
    <h1 className='flex text-2xl  gap-3 font-bold text-white'>
    <i className="ri-tv-fill text-[#6565cb]"></i> 
    <span>MOVIES HUB.</span>
    </h1>

<nav className='text-white flex flex-col gap-3  '>
    <h1 className='font-semibold mt-10 mb-5 text-xl'>New Feeds</h1>

    <Link to="/trending" className='p-5 hover:bg-[#6556cb] hover:text-white rounded-md duration-300 text-xl text-zinc-400 '><i className="ri-fire-fill"></i> Trending</Link>
    <Link to="/popular" className='p-5 hover:bg-[#6556cb] hover:text-white rounded-md duration-300 text-xl text-zinc-400 mr-2'><i className="ri-bard-fill"></i> Popular</Link>
    <Link to="/movies" className='p-5 hover:bg-[#6556cb] hover:text-white rounded-md duration-300 text-xl text-zinc-400 mr-2'><i className="ri-movie-fill"></i> Movies</Link>
    <Link to="/tvshows" className='p-5 hover:bg-[#6556cb] hover:text-white rounded-md duration-300 text-xl text-zinc-400 mr-2 '> <i className="ri-tv-2-fill"></i> TV Shows</Link>
    <Link  to="/peoples" className='p-5 hover:bg-[#6556cb] hover:text-white rounded-md duration-300 text-xl text-zinc-400 mr-2 mb-2'><i className="ri-team-fill"></i> Peoples</Link>
</nav>

<hr className='border-none bg-zinc-400 h-[1px]' />
<nav className='text-white flex flex-col gap-3  '>
    <h1 className='font-semibold mt-10 mb-5 text-xl'>Website Information</h1>

    <Link to="/about" className='p-5 hover:bg-[#6556cb] hover:text-white rounded-md duration-300 text-xl text-zinc-400 '><i className="ri-information-2-fill"></i> About Movies Hub</Link>
    <Link className='p-5 hover:bg-[#6556cb] hover:text-white rounded-md duration-300 text-xl text-zinc-400 mr-2'><i className="ri-phone-fill"></i> Contact Us</Link>
   
</nav>




    </div> 
  )
}

export default SideNav
