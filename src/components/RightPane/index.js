import React from 'react'
import './index.css'
import CaseFavorite from '../CaseFavorite'

function RightPane() {
  return (
    <div className="right-pane">
      <div className="ask-catura">
        <h3>Ask Catura</h3>
        <textarea placeholder="Type a message..."></textarea>
        <button>Copy to Send</button>
        <button>Preview</button>
      </div>
      <div className="action-launcher">
        <h3>Action Launcher</h3>
        <input type="text" placeholder="Search actions..." />
        <button>Add Action</button>
        <button>Fee Reversal</button>
        <button>Retail Onboarding</button>
        <button>Address Update</button>
      </div>
      <CaseFavorite />
    </div>
  )
}

export default RightPane
