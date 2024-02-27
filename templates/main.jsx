import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'
import HomeContent from './HomeContent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    {/* <App /> */}
    <HomeContent />
    <Footer />
  </React.StrictMode>,
)
