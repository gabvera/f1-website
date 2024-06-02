import { useState } from 'react'
import Home from './Components/Home'
import Races from './Components/Races'
import FerrariArticle from './Components/FerrariArticle'
import DriversStandings from './Components/DriversStandings'
import ScuderiasStandings from './Components/ScuderiasStandings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <Races />
      <FerrariArticle />
      <DriversStandings />
      <ScuderiasStandings />
    </>
  )
}

export default App
