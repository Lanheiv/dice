import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './style/index.css'
import "./style/App.css";
import "./style/Dice.css";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
