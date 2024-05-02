import React, { useEffect, useState } from 'react';
import SideNav from './partials/SideNav';
import TopNav from './partials/TopNav';
import axios from '../utils/Axios';
import Header from './partials/Header';
import HorizontalCards from './partials/HorizontalCards';
import Dropdown from './partials/Dropdown';
import Loading from './Loading';
import LocomotiveScroll from 'locomotive-scroll';


const Home = () => {
 
  document.title = "Movie App | HomePage";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState("");
  const [category, setCategory] = useState("all");

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      const random = data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(random);
    } catch (error) {
      console.error(error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTrending();
    !wallpaper && getHeaderWallpaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className='w-4/5 h-full overflow-x-hidden z-10 '>
        <TopNav />
        <Header wallpaper={wallpaper} />
        <div className='px-10 py-5 flex justify-between items-center'>
          <h1 className='text-3xl font-bold text-zinc-400'>Trending</h1>
          <Dropdown
            title="Filter"
            options={['tv', 'movie', 'all']}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
        <HorizontalCards trending={trending} />
      </div>
    </>
  ) :<Loading/>
};

export default Home;
