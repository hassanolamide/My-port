import { useState } from 'react'
import Sidenav from './comp/Sidenav'
import Main from './comp/Main'
import Work from './comp/Work'
import Project from './comp/Project'
import Contact from './comp/Contact'
import Skills from './comp/Skills'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sidenav/> 
    <Main/>       
    <Work />
    <Project/>
    <Skills/>
    <Contact/>
    </>
  )
}

export default App
