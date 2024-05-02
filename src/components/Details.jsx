import React from 'react'
import { useParams } from 'react-router-dom'

const Details = (data) => {
    const {id} = useParams()
    console.log(data)
  return (
    <div>
      details hai yaha par ${id}
    </div>
  )
}

export default Details
