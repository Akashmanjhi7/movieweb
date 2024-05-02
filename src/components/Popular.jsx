import React, { useEffect, useState } from 'react'
import Cards from './partials/Cards'
import { useNavigate, useParams } from 'react-router-dom'
import TopNav from './partials/TopNav'
import Dropdown from './partials/Dropdown'
import axios from '../utils/Axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from './Loading'

const Popular = () => {
const Navigate = useNavigate()


const [popular, setpopular] = useState([])
const [category, setcategory] = useState("movie")
const [duration, setduration] = useState("day")
const [page, setpage] = useState(1);
const [hasMore, sethasMore] = useState(true);
const getPopular = async()=>{
        try {
          const {data} =  await axios.get(`/${category}/popular?page=${page}`)
         console.log(data)
          if (data.results.length > 0) {
            setpopular((prev) => [...prev, ...data.results]);
            setpage(page + 1);
          } else {
            sethasMore(false);
          }

          
         
        } catch (error) {
            console.log("ERROR :" , error)
        }
    }

    const refreshHandler = () => {
      if (popular.length === 0) {
        getPopular();
      } else {
        setpage(1);
        setpopular([]);
        getPopular();
      }
    };
    
useEffect(() => {
 setpopular([])
 refreshHandler()
}, [category,duration])



    return popular.length>0 ? (
    <div className='    w-screen scroll-smooth  '>
    <div className='flex justify-between  w-full  items-center px-[4%]  '>
      <h1 className=' text-zinc-300 text-3xl font-semibold'>
      <i className="ri-arrow-left-line px-2 cursor-pointer" onClick={()=>Navigate(-1)}></i>
      Popular</h1>

      <div className='flex items-center w-[80%] mt-2  '>
        <TopNav/>
        <Dropdown title="Category"  options={[ "tv" ,"movie"]} func={(e)=>setcategory(e.target.value)} />
        <div className='w-8'></div>
      
      </div>
      </div>

    <InfiniteScroll
    dataLength={popular.length}
    next={getPopular}
    hasMore={true}
    loader={<Loading/>}
    // className='bg-red-400'
    >
      <Cards data={popular}/>
    </InfiniteScroll>

  </div>
  ): <Loading/>
}

export default Popular
