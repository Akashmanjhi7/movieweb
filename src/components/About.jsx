import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='text-zinc-300 flex items-center w-screen h-screen flex-col'>
             <i className="ri-tv-fill text-6xl border rounded-full p-10 mt-10  text-[#6565cb]"></i> 
             <h1 className='text-4xl font-black py-8'>MOVIES HUB</h1>
             <h2 className='text-2xl text-zinc-400 font-bold flex-wrap text-center'>API: TMDB</h2>
             <h2 className='text-2xl text-zinc-400 font-bold flex-wrap text-center'>Developer: Akash</h2>
             <h2 className='text-2xl text-zinc-400 font-bold flex-wrap text-center'>Design: Sheryians Coding School</h2>

             <div className=' mt-10 text-4xl flex gap-8 px-4 py-8'>
             <Link to="https://www.linkedin.com/in/akash-manjhi"><i className="ri-linkedin-fill  hover:text-[#6565cb] duration-200 "></i></Link>
             <Link to="https://www.instagram.com/_akashmanjhi/" ><i className="ri-instagram-fill  hover:text-[#6565cb] duration-200"></i></Link>
             <Link to="https://www.github.com/Akashmanjhi7" ><i className="ri-github-fill  hover:text-[#6565cb] duration-200"></i></Link>
             <Link to="https://www.twitter.com/akash_manjhi_" ><i className="ri-twitter-x-fill  hover:text-[#6565cb] duration-200"></i></Link>
             </div>

             <p className='flex-wrap text-center text-lg text-zinc-500'>© 2024 Movies Hub. All rights reserved. Developed by Akash. Data provided by TMDB.</p>
    </div>
  )
}

export default About
