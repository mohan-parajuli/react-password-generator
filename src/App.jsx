import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState(true)
  const [character, setcharacter] = useState(true)
  const [password, setpassword] = useState("")


  const passwordref = useRef("null")
  const genpassword = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if (number) {
      str += "0123456789"
    }
    if (character) {
      str += "!@#$%^&*()~{}[]"
    }

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  },
    [length, number, character])

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordref.current?.select()
  }, [password])

  useEffect(() => {
    genpassword()
  }, [length, number, character, genpassword])


  return (
    <>
      <div className="min-w-sm w-2xl bg-gray-600 m-auto pb-4 rounded-2xl">
        <h1 className='text-center text-2xl text-white pb-10 pt-4 font-medium'>Password Generator</h1>
        <div>
          <div className='flex  text-center m-auto min-w-sm w-xl rounded lg overflow-hidden items-center'>
            <input
              type="text"
              value={password}
              placeholder='password'
              className='outline-none w-full px-3 bg-white h-10 rounded-lg '
              readOnly
              ref={passwordref}
            />
            <button onClick={copyPasswordToClipboard} className='bg-blue-400 text-white rounded-lg p-2.25 outline-none'>copy</button>
          </div>
          <div className='flex text-white mt-4'>
            <input
              type="range"
              min={1}
              max={16}
              value={length}
              className='ml-10 mr-4'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label className=' text-xl mr-4'>Length: {length}</label>

            <input
              type="checkbox"
              defaultChecked={number}
              onChange={(e) => { setnumber(e.target.checked) }}

            />
            <label className='text-xl mr-4'>Number</label>

            <input
              type="checkbox"
              defaultChecked={character}
              onChange={(e) => { setcharacter(e.target.checked) }}

              className=''
            />
            <label className='text-xl mr-4'>character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
