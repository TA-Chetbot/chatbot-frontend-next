"use client";

import React from "react";
import ChatbotChatbox from "./ChatbotChatbox";
import ChatbotToggle from "./ChatBotToggle";

export default function ChatbotContainer() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <ChatbotChatbox />
      <ChatbotToggle />
    </div>
  );
}
