import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { GetWeather } from './pages/GetWeather'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GetWeather />
  </StrictMode>,
)
