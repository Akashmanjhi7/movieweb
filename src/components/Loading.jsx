import React from 'react'
import loader from '/loader.svg'
const Loading = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
    <img className='h-[20%]' src={loader}></img>
    </div>
  )
}

export default Loading
