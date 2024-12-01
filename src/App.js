import React from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import MainContent from './components/MainContent'
import './App.css'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <TopBar />
        <MainContent />
      </div>
    </div>
  )
}

export default App
