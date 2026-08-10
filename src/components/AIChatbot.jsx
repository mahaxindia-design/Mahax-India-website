import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import './AIChatbot.css';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`;

const SYSTEM_PROMPT = `
You are the official AI Assistant for Mahax India, a premium, responsible, and AI-first urban car care platform.
Always be professional, polite, and helpful. Use a premium, sleek tone. Do not use emojis excessively.
Key information about Mahax India:
- We offer standard operating procedures across locations, controlled water usage, and digital accountability.
- We save customers time, fuel, and traffic by bringing services to them.
- Leadership: Sujatha Tadkal (Chairperson), Srinivasa Goud Tadkal (Founder), Mohd Taher Uddin (Co-Founder & CEO).
- Next-Gen Team: Mahalakshmi Tadkal (Product Research Associate), Sai Charan Bollam (Business Dev & Sustainability Associate).
If you don't know the answer to a question, politely state that the user can contact info@mahaxindia.com for more details.
`;

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm the Mahax AI Assistant. How can I help you with your urban car care needs today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Build conversation history for the API
      const contents = [
        {
          role: "user",
          parts: [{ text: SYSTEM_PROMPT }]
        },
        {
          role: "model",
          parts: [{ text: "Understood. I am the Mahax AI Assistant." }]
        }
      ];

      // Add actual chat history
      messages.forEach(msg => {
        contents.push({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        });
      });

      // Add the new user message
      contents.push({
        role: "user",
        parts: [{ text: userMessage }]
      });

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ contents })
      });

      const data = await response.json();

      if (response.ok && data.candidates && data.candidates[0].content.parts[0].text) {
        setMessages(prev => [...prev, { text: data.candidates[0].content.parts[0].text, sender: 'bot' }]);
      } else {
        console.error("API Error:", data);
        if (data.error && data.error.message && data.error.message.includes("API key not valid")) {
          setMessages(prev => [...prev, { text: "System Error: The provided API Key is invalid. Please check the key and try again.", sender: 'bot' }]);
        } else {
          setMessages(prev => [...prev, { text: "I'm having trouble connecting right now. Please email info@mahaxindia.com for assistance.", sender: 'bot' }]);
        }
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setMessages(prev => [...prev, { text: `Network error: ${error.message || error.toString()}. Please check your connection.`, sender: 'bot' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chat-wrapper">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chat-window"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="chat-header">
              <div className="chat-header-info">
                <h3>Mahax Assistant</h3>
                <p><span className="online-dot"></span> Online</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', marginLeft: 'auto' }}
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="chat-messages">
              {messages.map((msg, idx) => (
                <div key={idx} className={`message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <form className="chat-input-area" onSubmit={handleSendMessage}>
              <div className="chat-input-wrapper">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isTyping}
                />
                <button type="submit" className="chat-send-btn" disabled={isTyping || !inputValue.trim()}>
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button className="chat-bubble-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default AIChatbot;
