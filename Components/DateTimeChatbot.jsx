import React, { useState } from "react";
import { FaRegMessage } from "react-icons/fa6";

function getBotResponse(message) {
    const now = new Date();
    const msg = message.toLowerCase();

    if (msg.includes("time")) {
        return `Current time is ${now.toLocaleTimeString()}`;
    }
    if (msg.includes("date")) {
        return `Today's date is ${now.toLocaleDateString()}`;
    }
    if (msg.includes("day")) {
        return `Today is ${now.toLocaleDateString(undefined, { weekday: "long" })}`;
    }
    if (msg.includes("year")) {
        return `The current year is ${now.getFullYear()}`;
    }
    return "I can help with questions about the date, time, day, or year!";
    }

    function DateTimeChatbot() {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Ask me about the date, time, day, or year!" },
    ]);
    const [input, setInput] = useState("");
    const [open, setOpen] = useState(false);

    const handleSend = () => {
        if (!input.trim()) return;
        const userMsg = { sender: "user", text: input };
        const botMsg = { sender: "bot", text: getBotResponse(input) };
        setMessages([...messages, userMsg, botMsg]);
        setInput("");
    };

    return (
      <div>
        <button
          className="chatbot-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Open chatbot"
        >
          <FaRegMessage />
        </button>
        {open && (
          <div className="chatbot-container">
            <div className="chatbot-messages">
              {messages.map((msg, idx) => (
                <div key={idx} className={`chatbot-message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="chatbot-input-row">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about date, time, day, year..."
              />
              <button onClick={handleSend}>Send</button>
            </div>
          </div>
        )}

        
      </div>
    );
}

export default DateTimeChatbot;
