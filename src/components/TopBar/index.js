import React from 'react'
import './index.css'

function TopBar() {
  return (
    <div className="top-bar">
      <div className="left-section">
        <div className="logo">
          <h2>RISK HAWK</h2>
          <p>Manage your exposures</p>
        </div>
      </div>

      <div className="center-section">
        <button className="tab active">Chat</button>
        <button className="tab">Feed</button>
        <button className="tab">Help</button>
      </div>

      <div className="right-section">
        <div className="profile">
          <span>Palak Bansal</span>
        </div>
        <div className="logout">
          <button>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default TopBar
