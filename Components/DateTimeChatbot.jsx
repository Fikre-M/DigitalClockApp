import React, { useState } from "react";

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
            💬
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
        <style>{`
                .chatbot-toggle {
                    position: fixed;
                    bottom: 24px;
                    right: 24px;
                    z-index: 1000;
                    background: #007bff;
                    color: #fff;
                    border: none;
                    border-radius: 50%;
                    width: 56px;
                    height: 56px;
                    font-size: 24px;
                    cursor: pointer;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                }
                .chatbot-container {
                    position: fixed;
                    bottom: 90px;
                    right: 24px;
                    width: 320px;
                    max-width: 90vw;
                    background: #fff;
                    border-radius: 8px;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.2);
                    z-index: 1001;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                }
                .chatbot-messages {
                    flex: 1;
                    padding: 16px;
                    overflow-y: auto;
                    max-height: 300px;
                }
                .chatbot-message {
                    margin-bottom: 8px;
                    padding: 8px 12px;
                    border-radius: 16px;
                    max-width: 80%;
                    word-break: break-word;
                }
                .chatbot-message.bot {
                    background: #f1f1f1;
                    align-self: flex-start;
                }
                .chatbot-message.user {
                    background: #007bff;
                    color: #fff;
                    align-self: flex-end;
                }
                .chatbot-input-row {
                    display: flex;
                    border-top: 1px solid #eee;
                    padding: 8px;
                    background: #fafafa;
                }
                .chatbot-input-row input {
                    flex: 1;
                    padding: 8px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    margin-right: 8px;
                }
                .chatbot-input-row button {
                    background: #007bff;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    padding: 8px 12px;
                    cursor: pointer;
                }
                @media (max-width: 600px) {
                    .chatbot-container {
                        width: 98vw;
                        right: 1vw;
                        bottom: 70px;
                    }
                    .chatbot-toggle {
                        right: 1vw;
                        bottom: 16px;
                    }
                }
            `}</style>
    </div>
  );
}

export default DateTimeChatbot;
