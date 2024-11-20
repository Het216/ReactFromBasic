import React from 'react'
import { useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    const data=useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch("https://api.github.com/users/Het216").then(response => response.json())
    //  .then(data => {console.log(data);
    //     setData(data)
    //  })
    
      
    // }, [])
    
  return (
    <div className='text-center text-3xl bg-gray-600 p-4 text-white'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt=""  width={100} /> 
    </div>
  )
}

export default Github

export const GithubInfo= async () => {
   const response= await fetch("https://api.github.com/users/Het216")

   return response.json()
}