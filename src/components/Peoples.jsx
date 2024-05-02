import React, { useEffect, useState } from 'react'
import Cards from './partials/Cards'
import { useNavigate, useParams } from 'react-router-dom'
import TopNav from './partials/TopNav'
import Dropdown from './partials/Dropdown'
import axios from '../utils/Axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from './Loading'
import Details from './Details'

const Peoples = () => {
    const Navigate = useNavigate()
    
    const [peoples, setpeoples] = useState([])
    const [category, setcategory] = useState("tv")
    const [duration, setduration] = useState("week")
    const [page, setpage] = useState(1)
    const [hasmore, sethasmore] = useState(true)
    const getpeoples = async()=>{
            try {
              const {data} =  await axios.get(`/trending/person/${duration}?page=${page}`)

              if(data.results.length>0){
                setpage(page+1)
                setpeoples((prev)=> [...prev , ...data.results])
              }
              else{
                sethasmore(false)
              }
           
            
            } catch (error) {
                console.log("ERROR :" , error)
            }
        }

        const refreshHandler= ()=>{
          if(peoples.length===0){
            getpeoples();
          }
          else{
          getpeoples()

          }
        }

        
    useEffect(() => {
      setpeoples([])
      refreshHandler()
    
    }, [category,duration])
    
    
    
        return peoples.length>0 ? (
        <div className='   w-screen  scroll-smooth  '>
        <div className='flex justify-between w-full items-center px-[4%]  '>
          <h1 className=' text-zinc-300 text-3xl font-semibold'>
          <i className="ri-arrow-left-line px-2 cursor-pointer" onClick={()=>Navigate(-1)}></i>
          Peoples</h1>
    
          <div className='flex  items-center w-[90%]  '>
            <TopNav/>
            <Dropdown title="Duration"  options={["day", "week"]} func={(e)=>setduration(e.target.value)} />
          </div>
          </div>
    
        <InfiniteScroll
        dataLength={peoples.length}
        next={getpeoples}
        hasMore={hasmore}
        loader={<Loading/>}
        className='overflow-x-hidden'
        >
          <Cards data={peoples}/>
          
        </InfiniteScroll>
    
      </div>
      ): <Loading/>
    }

export default Peoples
