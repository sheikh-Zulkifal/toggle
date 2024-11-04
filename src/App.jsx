import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar.jsx'
import "./App.css"
import Login from './pages/Login.jsx'
import Forecasting from './pages/Forecasting.jsx'
import BundlingResult from './pages/BundlingResult.jsx'
import ForecastResult from './pages/ForecastResult.jsx'
const App = () => {
  return (
    <div className='main'>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path='/login' element={<Login />} />
<Route path='/forecasting' element={<Forecasting/>} />
<Route path='/databundling/results/:id' element={<BundlingResult/>} />
<Route path='/forecasting/result/:id' element={<ForecastResult/>} />
</Routes>

    </div>
  )
}

export default App