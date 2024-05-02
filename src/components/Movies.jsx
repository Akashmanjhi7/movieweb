import React, { useEffect, useState } from 'react'
import Cards from './partials/Cards'
import { useNavigate, useParams } from 'react-router-dom'
import TopNav from './partials/TopNav'
import Dropdown from './partials/Dropdown'
import axios from '../utils/Axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from './Loading'

const Movies = () => {
const Navigate = useNavigate()


const [movies, setmovies] = useState([])
const [category, setcategory] = useState("movie")
const [duration, setduration] = useState("day")
const [page, setpage] = useState(1)
const [hasmore, sethasmore] = useState(true)
const getMovies = async()=>{
        try {
          const {data} =  await axios.get(`/discover/${category}?page=${page}`)
          
          if(data.results.length > 0){
            setmovies((prev)=> [...prev , ...data.results])
            setpage(page+1)
          }
          else{
            sethasmore(false)
          }


        // setmovies(data.results)
        console.log(data.results)
         
        } catch (error) {
            console.log("ERROR :" , error)
        }
    }


    const refreshHandler = () => {
      if (movies.length === 0) {
        getMovies();
      } else {
        setpage(1);
        setmovies([]);
        getMovies();
      }
    };
    
useEffect(() => {
  setmovies([])
 refreshHandler()

}, [category,duration])



    return movies.length>0 ? (
    <div className='   w-screen  scroll-smooth  '>
    <div className='flex justify-between  w-full  items-center px-[4%]  '>
      <h1 className=' text-zinc-300 text-3xl font-semibold'>
      <i className="ri-arrow-left-line px-2 cursor-pointer" onClick={()=>Navigate(-1)}></i>
      Movies</h1>

      <div className='flex  items-center w-[90%]  '>
        <TopNav/>
        {/* <Dropdown title="Category" disabled={true} options={["all", "tv" ,"movies"]} func={(e)=>setcategory(e.target.value)} />
        <div className='w-8'></div>
        <Dropdown title="Duration"  options={["day", "week"]} func={(e)=>setduration(e.target.value)} /> */}
      </div>
      </div>

    <InfiniteScroll
    dataLength={movies.length}
    next={getMovies}
    hasMore={hasmore}
    loader={<Loading/>}
    // className='bg-red-400'
    >
      <Cards data={movies}/>
    </InfiniteScroll>

  </div>
  ): <Loading/>
}

export default Movies
