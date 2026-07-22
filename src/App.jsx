import React from 'react'
import Page from './components/Page'
import LoginPanel from './components/login/LoginPanel'
import Home from './components/home/Home'
import './App.css'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-zinc-900'>
      <Home></Home>
    </div>
  )
}

export default App
