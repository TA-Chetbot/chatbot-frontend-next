"use client";

import React, { useState } from "react";
import ChatbotChatbox from "./ChatbotChatbox";
import ChatbotToggle from "./ChatBotToggle";

export default function ChatbotContainer() {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <ChatbotChatbox closeChatbox={() => setIsChatboxOpen(false)} isChatboxOpen={isChatboxOpen} />
      <ChatbotToggle
        toggleChatbox={() => setIsChatboxOpen(!isChatboxOpen)}
        isChatboxOpen={isChatboxOpen}
      />
    </div>
  );
}
