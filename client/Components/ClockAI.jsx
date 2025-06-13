import React, { useState } from "react";
import aiAgent from "../aiAgent"; 

function ClockAI() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = () => {
    setAnswer(aiAgent(new Date(), query));
  };

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask about date or time"
      />
      <button onClick={handleAsk}>Ask</button>
      <div>{answer}</div>
    </div>
  );
}
export default ClockAI;
