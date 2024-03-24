import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AiProvider } from './context/provider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AiProvider>
      <App />
    </AiProvider>
  </React.StrictMode>,
)
