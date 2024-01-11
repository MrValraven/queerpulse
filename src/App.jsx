import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Logo from './assets/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Coming soon :)</h1>
        <p></p>
        <img className='logo' src={Logo} alt="" />
      </div>
    </>
  )
}

export default App
