import React, { useEffect, useState } from 'react'
import Cards from './partials/Cards'
import { useNavigate, useParams } from 'react-router-dom'
import TopNav from './partials/TopNav'
import Dropdown from './partials/Dropdown'
import axios from '../utils/Axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from './Loading'
import Movies from './Movies'

const Tvshows = () => {
    const Navigate = useNavigate()
    
    
    const [tvshows, settvshows] = useState([])
    const [category, setcategory] = useState("tv")
    const [duration, setduration] = useState("day")
    const [page, setpage] = useState(1)
    const [hasmore, sethasmore] = useState(true)
    const getTvshows = async()=>{
            try {
              const {data} =  await axios.get(`/discover/${category}?page=${page}`)
              
              if(data.results.length>0){
                setpage(page+1)
                settvshows((prev)=> [...prev , ...data.results])
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
        
        const refreshHandler = ()=>{
          if(Movies.length === 0){
            getTvshows();
          }
          else{
            setpage(1)
            settvshows([])
            getTvshows();
          }
        }


    useEffect(() => {
      settvshows([])
      refreshHandler()
    
    }, [category,duration])
    
    
    
        return tvshows.length>0 ? (
        <div className='   w-screen  scroll-smooth  '>
        <div className='flex justify-between  w-full  items-center px-[4%]  '>
          <h1 className=' text-zinc-300 text-3xl font-semibold'>
          <i className="ri-arrow-left-line px-2 cursor-pointer" onClick={()=>Navigate(-1)}></i>
          TvShows</h1>
    
          <div className='flex  items-center w-[90%]  '>
            <TopNav/>
           
          </div>
          </div>
    
        <InfiniteScroll
        dataLength={tvshows.length}
        next={getTvshows}
        hasMore={hasmore}
        loader={<Loading/>}
        // className='bg-red-400'
        >
          <Cards data={tvshows}/>
        </InfiniteScroll>
    
      </div>
      ): <Loading/>
    }

export default Tvshows
