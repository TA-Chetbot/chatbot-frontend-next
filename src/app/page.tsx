import React from "react";
import "../styles/background.css";
import ChatbotContainer from "@/components/ChatbotContainer";

export default function Home() {
  return (
    <>
      <div className="background-pattern w-screen h-screen">
        <React.Suspense fallback={<div>Loading...</div>}>
          <ChatbotContainer />
        </React.Suspense>
      </div>
    </>
  );
}
