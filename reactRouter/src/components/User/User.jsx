import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const { userid } = useParams()
  return (
    <div className=' text-black text-center font-bold bg-slate-400 p-4 '>User : {userid} </div>
  )
}

export default User