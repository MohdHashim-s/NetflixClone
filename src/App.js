import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import {orginals,action} from './urls'
import Banner from './Components/Banner/Banner'
import Rawpost from './Components/Rawpost/Rawpost'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Rawpost url={orginals} title='Netflix orginals' />
      <Rawpost url={action} title='Action' isSmall  />
    </div>
  )
}

export default App