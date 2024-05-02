import axios from '../../utils/Axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import noImage from '/noimage.png'
const TopNav = () => {


const [search, setsearch] = useState("")
const [movieSearch, setmovieSearch] = useState(null)
const getSearches = async()=>{
  try {
    const {data} = await axios.get(`/search/multi?query=${search}`)
   setmovieSearch( data.results)
  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
getSearches()
}, [search])


  return (

    <div className=' w-screen  relative h-[10vh]  text-zinc-400  flex justify-start pl-[15%] items-center gap-3 text-2xl z-50 border-zinc-200'>
      <i className="ri-search-line"></i>
      <input type="text" placeholder='Search Tv Shows, Movies, Anime' className='w-1/2 p-5 outline-none  bg-transparent text-zinc-200 border-b ' onChange={(e)=>setsearch(e.target.value)}
      value={search} />
      {search.length >0 &&   <i className="ri-close-line" onClick={()=>setsearch("")}></i> }
    


{search.length > 0 && <>
 
    <div className='w-[55%] max-h-[50vh] bg-zinc-200 absolute top-[89%] rounded-md overflow-auto' >

    {movieSearch.map((elem , index)=>
        <Link key={index} className='text-zinc-600  hover:text-black hover:bg-zinc-300 duration-200 w-full flex p-10 items-center justify-start border-b border-zinc-600  gap-2' >
          <img src={elem.backdrop_path || elem.profile_path ?`https://image.tmdb.org/t/p/original/${elem.backdrop_path || elem.poster_path || elem.profile_path}`:noImage} alt="" className='h-[10vh] w-[10vh] object-cover rounded-md shadow-lg'/>
          <span>{elem.original_title || elem.name || elem.title || elem.original_name}</span>
        </Link>
        )}
      </div>
 
</> }
      

    
    </div>


  )
}

export default TopNav
