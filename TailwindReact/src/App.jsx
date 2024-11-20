import { useState } from 'react'
import Card from './components/card'
import './App.css'

function App() {


  return (
    <>
   <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 w-90 h-15'>Tailwind | React </h1>   
    <Card username="Het"/>
    <Card username="Het"/>

    </>
  )
}

export default App
