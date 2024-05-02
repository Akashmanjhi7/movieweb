
import React from "react"
import noImage from '/noimage.png'
import { Link } from "react-router-dom"
const Cards = ({data}) => {

  return (
<div className="  h-auto flex flex-wrap gap-3 p-[3%] items-center justify-center mt-5 bg-[#1F1E24]   " >

{data.map((c,i)=>
<div key={i} className=" lg:max-h-[40%] lg:w-[24%] rounded-lg  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] shadow-zinc-700 overflow-hidden duration-200 " style={{maxHeight: "40%"}} >
<Link to={`/details/${i}`}  >
            <div style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain", objectPosition: "center",  overflow:"hidden"}}>
              <img
                className="h-full w-full hover:scale-110 duration-300 hover:saturate-150"
                src={c.backdrop_path || c.poster_path ||  c.profile_path ? `https://image.tmdb.org/t/p/original/${c.backdrop_path || c.poster_path ||  c.profile_path} `: noImage}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between px-4 mt-5">
              <h1 className="text-md w-full text-nowrap overflow-hidden font-semibold text-zinc-200">
                {(c.name || c.title || c.original_name)}
              </h1>
            </div>
          </Link>
</div>
)}

</div>
  )
}

export default Cards




