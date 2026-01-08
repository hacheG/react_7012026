import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home  from './pages/Home'
import  Acerca  from './pages/Acerca'
import  Contacto  from './pages/Contacto'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Error404 } from './pages/Error404'


function App() {
  

  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/acerca" element={<Acerca/>} />
          <Route path="/about" element={<Navigate to="/acerca" />} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
