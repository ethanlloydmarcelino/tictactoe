import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'

function Intro() {
  const [count, setCount] = useState("Ethan")


  function handleClick() {
    if (count === "Cuddles") {
      setCount("Ethan");
    } else if (count === "Ethan"){
      setCount("Lloyd");
    } else {
      setCount("Cuddles");
    } 
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Ethan Marcelino</h1>
      <div className="card">
        <button onClick={() => handleClick()}>
          Hi! My name is {count}
        </button>
        <p>
          Still..... <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Intro
