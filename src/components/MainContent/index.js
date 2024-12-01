import React from 'react'
import CustomerProfile from '../CustomerProfile'
import ChatPanel from '../ChatPanel'
import RightPane from '../RightPane'
import './index.css'

function MainContent() {
  return (
    <div className="main-content">
      <CustomerProfile />
      <ChatPanel />

      <RightPane />
    </div>
  )
}

export default MainContent
