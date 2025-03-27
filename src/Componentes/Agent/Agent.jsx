import React from 'react'
import './index.css'

const Agent = () => {
  const handleOpenChatbot = () => {
    setTimeout(() => {
      const interval = setInterval(() => {
        const dfMessenger = document.querySelector('df-messenger')
        const bubble = dfMessenger?.shadowRoot?.querySelector('df-messenger-chat-bubble')
        const openButton = bubble?.shadowRoot?.querySelector('button')

        if (openButton) {
          openButton.click()
          clearInterval(interval)
        }
      }, 300)
    }, 1000) // esperamos 1 segundo inicial
  }

  return (
    <div className="agent-container">
      <h2 className="agent-title">Try our solution</h2>

    </div>
  )
}

export default Agent
