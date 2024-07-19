
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Watchhistory from './pages/Watchhistory'
import Home from './pages/Home'
import Header from './Compnents/Header'
import Footer from './Compnents/Footer'

function App() {
 

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watchhistory' element={<Watchhistory/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
