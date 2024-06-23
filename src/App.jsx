import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Postes from './components/Postes'
import {Routes , Route} from 'react-router-dom'
import Mainpost from './components/Mainpost'


function App() {
  

  return (
    <>
     <Routes>
      <Route path='/Posts' element={<Postes/>}/>
     </Routes>
    </>
  )
}

export default App
