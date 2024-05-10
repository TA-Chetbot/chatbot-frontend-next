import React from "react";
import "../styles/background.css";
import ChatbotContainer from "@/components/ChatbotContainer";

export default function Home() {
  return (
    <>
      <div className="background-pattern w-screen h-screen">
        <div className="w-full h-full flex flex-col justify-center items-center gap-[20px] text-center">
          <h1 className="text-black font-bold text-7xl">Tugas Akhir Chatbot Swarm Made with Next</h1>
          <p className="text-xl text-slate-800">Click on the bottom right icon to toggle the Chatbot Interface</p>
        </div>
        <React.Suspense fallback={<div>Loading...</div>}>
          <ChatbotContainer />
        </React.Suspense>
      </div>
    </>
  );
}
