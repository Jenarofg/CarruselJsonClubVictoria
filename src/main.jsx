import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Appcopy from './Appcopy.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Appcopy />
  </StrictMode>,
)
