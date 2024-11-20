import { useState } from "react"


function App() {
const [color,setColor]=useState("olive")

  return (
    <>
    <div className=" w-full h-screen duration-200 " 
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center px-2 bottom-12  inset-x-0">
        <div className="flex flex-wrap justify-center shadow-lg bg-white px-2 py-2 rounded-2xl gap-3">
          <button onClick={() => setColor("red")} className="outline-none px-6 mx-1 py-2 rounded-full " style={{backgroundColor:"red"}}>Red</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-4 py-2 mx-1 rounded-full" style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={() => setColor("Green")} className="outline-none px-4 py-2 mx-1 rounded-full" style={{backgroundColor:"green"}}>Green</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
