import { useState, useCallback,useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
    let pass = ""
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+-={}:<>?/~`|"
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard= useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length, numAllowed, charAllowed ,passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-36 text-orange-500 bg-gray-800 ">
        <h1 className="text-white text-center text-3xl mb-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={password}
          className="outline-none w-full py-1 px-4 mb-3 rounded-full"
          placeholder="Password"
          readOnly
          ref={passwordRef} />
          <button className="bg-blue-700 text-white mb-3 px-3 rounded-xl py-0.5 mx-1" onClick={copyPasswordToClipboard}>Copy</button> 
        </div>
        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={100} value={length}
            className="cursor-pointer my-2"
            onChange={(e) =>{
              setLength(e.target.value) 
              }}/>
            <label >Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1 my-2">
            <input 
            type="checkbox"
            defaultChecked={numAllowed} id="numberInput"
            onChange={ ()=> {
              setNumAllowed((prev) => !prev);
            }}/>
            <label >Numbers</label>
          </div>
          <div className="flex items-center gap-x-1 my-2">
            <input 
            type="checkbox"
            defaultChecked={charAllowed} id="charInput"
            onChange={ ()=> {
              setCharAllowed((prev) => !prev);
            }}/>
            <label >Characters</label>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
