import React from 'react'
import './index.css'

function CustomerProfile() {
  return (
    <div className="customer-profile">
      <div className="customer-info">
        <h3>Hannibal Smith</h3>
        <p>1 Market Street San Francisco, CA</p>
        <p>Customer ID: 12345</p>
        <p>Email: rachel@sample.com</p>
        <p>Phone Number: 8051298905</p>
      </div>

      <div className="loyalty-info">
        <div className="loyalty">
          <span className="label">Loyalty Tier:</span>
          <span>Silver</span>
        </div>
        <div className="segment">
          <span className="label">Segment:</span>
          <span>Sleepy Customer</span>
        </div>
      </div>

      <div className="engagement-info">
        <div className="lifetime-value">
          <span className="label">Lifetime Value:</span>
          <span>$1 M</span>
        </div>
        <div className="purchase-propensity">
          <span className="label">Propensity to Purchase:</span>
          <span>75%</span>
        </div>
        <div className="engagement-score">
          <span className="label">Engagement Score:</span>
          <span>80%</span>
        </div>
      </div>

      <div className="action-buttons">
        <button className="assign-agent">Assign Other Agent</button>
        <button className="add-widget">Add New Widget</button>
      </div>
    </div>
  )
}

export default CustomerProfile
