export async function sendNebulaMessage(message: string) {
  const res = await fetch("https://nebula-api.thirdweb.com/chat", {
    method: "POST",
    headers: {
      "x-secret-key": "", 
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      stream: false,
    }),
  });
  return res.json();
}

// Example usage in a React component
import React, { useState } from "react";
import { sendNebulaMessage } from "./utils/nebulaChat";

function ChatComponent() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    const data = await sendNebulaMessage(input);
    setResponse(data.reply); // Adjust according to Nebula's response structure
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleSend}>Send</button>
      <div>{response}</div>
    </div>
  );
}

export default ChatComponent;