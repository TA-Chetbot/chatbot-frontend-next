// components/ChatbotToggle.js

import React, { useState } from "react";

const ChatbotToggle = () => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  const closeChatbox = () => {
    setIsChatboxOpen(false);
  };

  return (
    <div>
      <button
        className={`bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center transition-transform duration-300 ${
          isChatboxOpen ? "transform rotate-45" : ""
        }`}
        onClick={toggleChatbox}
        aria-label="Toggle Chatbot"
      >
        <span className="text-xl">&#128172;</span>
      </button>
    </div>
  );
};

export default ChatbotToggle;
