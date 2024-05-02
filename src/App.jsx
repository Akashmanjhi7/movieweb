import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CustomCursor from './utils/customcursor/Customcursor';
import Error from './Error';
import Trending from './components/Trending';
import Popular from './components/Popular';
import Movies from './components/Movies';
import Tvshows from './components/Tvshows';
import Peoples from './components/Peoples';
import Details from './components/Details';
import About from './components/About';





const App = () => {
  
    
    
    
  return (
    <div className='h-screen w-screen bg-[#1F1E24] flex   '>
      <CustomCursor />
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/trending' element={<Trending/>} />
        <Route path='/popular' element={<Popular/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/tvshows' element={<Tvshows/>} />
        <Route path='/peoples' element={<Peoples/>} />
        <Route path='/details/:id' element={<Details/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/*' element={<Error/>} />
      </Routes>
    </div>
  );
};

export default App;