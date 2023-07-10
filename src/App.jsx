import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Githubrepos from './components/githubrepos'
import Local from './components/local'
import './App.css'


function App() {
  

  return (
    <>
    <Local />
    <Githubrepos />
    </>
  )
}

export default App
