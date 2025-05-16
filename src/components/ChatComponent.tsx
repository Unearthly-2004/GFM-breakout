import React, { useState } from "react";
import { sendNebulaMessage } from "../utils/nebulaChat";

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