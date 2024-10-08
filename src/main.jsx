import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PlayerContextProvider from './context/PlayerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PlayerContextProvider> 
        {/* Now we will get the support of PlayerContext on our app. */}
        <App />
      </PlayerContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
