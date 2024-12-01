import React, {useState} from 'react'
import './index.css'

function ChatPanel() {
  const [activeTab, setActiveTab] = useState('Conversation')

  return (
    <div className="chat-panel">
      <div className="chat-tabs">
        <button
          className={activeTab === 'Conversation' ? 'active' : ''}
          onClick={() => setActiveTab('Conversation')}
        >
          Conversation
        </button>
        <button
          className={activeTab === 'Address Update' ? 'active' : ''}
          onClick={() => setActiveTab('Address Update')}
        >
          Address Update
        </button>
        <button
          className={activeTab === 'Fee Reversal' ? 'active' : ''}
          onClick={() => setActiveTab('Fee Reversal')}
        >
          Fee Reversal
        </button>
        <button
          className={activeTab === 'Reta' ? 'active' : ''}
          onClick={() => setActiveTab('Reta')}
        >
          Reta
        </button>
        <button
          className={
            activeTab === 'Escalate' ? 'active escalate-tab' : 'escalate-tab'
          }
          onClick={() => setActiveTab('Escalate')}
        >
          Escalate
        </button>
      </div>

      <div className="chat-messages">
        <div className="message received">
          <p>
            <strong>Rachel Adams:</strong> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit...
          </p>
        </div>
        <div className="message sent">
          <p>
            <strong>You:</strong> Lorem ipsum dolor sit amet, consectetur
            adipiscing elit...
          </p>
        </div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Type a message..." />
        <button className="send-button">Send</button>
      </div>
    </div>
  )
}

export default ChatPanel
