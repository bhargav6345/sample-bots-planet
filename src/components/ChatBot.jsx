import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI sales assistant. How can I help you today?",
      sender: 'bot',
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
    };
    setMessages((prev) => [...prev, userMessage]);
    setNewMessage('');

    // Simulate bot response
    // In a real application, you would make an API call here
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: "I'm processing your request. This is a simulated response. In a real application, this would be handled by an AI model.",
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="chat-title">
          <div className="bot-avatar">🤖</div>
          <div>
            <h2>Sales Assistant</h2>
            <span className="status online">Online</span>
          </div>
        </div>
      </div>

      <div className="messages-container">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.sender === 'bot' ? 'bot' : 'user'}`}
          >
            {message.sender === 'bot' && <div className="bot-avatar">🤖</div>}
            <div className="message-content">{message.text}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form className="message-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here..."
          className="message-input"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBot; 