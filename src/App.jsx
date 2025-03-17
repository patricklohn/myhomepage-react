import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <div className='container-page'>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default App
