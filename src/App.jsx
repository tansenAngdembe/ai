import { useEffect } from 'react'
const URI = import.meta.env.VITE_URL;
const Secrect_key = import.meta.env.VITE_API_KEY
const Host = import.meta.env.VITE_HOST
// import axios from 'axios'
import {
  Navbar,
  Hero,
  Voicelab,
  Asset,
  Footer,
  Error,
  Models
} from './Componentsdom.jsx'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import './App.css'
// import { Api } from './components/Api.jsx'

function App() { 
  // console.log(import.meta.env.VITE_URL)
  // const options = {
  //   method: 'GET',
  //   url: URI,
  //   headers: {
  //     'X-RapidAPI-Key': Secrect_key,
  //     'X-RapidAPI-Host': Host
  //   }
  // };
  // useEffect(() => {
  //   apiCall(options)
  // }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} exact />
        <Route path='/models' element={<Models />} />
        <Route path='/voicelab' element={<Voicelab />} exact />
        <Route path='/asset' element={<Asset />} exact />
        <Route path='*' element={<Error />} exact />
      </Routes>
      <Footer />

    </BrowserRouter>

  )
}

export default App
