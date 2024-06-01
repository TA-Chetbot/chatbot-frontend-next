import React, { useState } from "react";
import Image from "next/image";

export default function ChatbotChatbox({ isChatboxOpen, closeChatbox }) {
  const [prompt, setPrompt] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatLog, setChatLog] = useState([]);

  async function getAnswer(
    question: string,
    e: React.SyntheticEvent | null = null
  ) {
    e?.preventDefault();
    setIsTyping(true);
    setChatLog((prev) => [...prev, { role: "user", content: question }]);
    const preprocessed_question = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/preprocess_question`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: question,
        }),
      }
    );
    const preprocessed_question_json = await preprocessed_question.json();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/get_answer`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: preprocessed_question_json.preprocessed_question,
        }),
      }
    );
    const data = await response.json();
    setChatLog((prev) => [
      ...prev,
      { role: "assistant", content: data.answer },
    ]);
    setIsTyping(false);
    return data;
  }

  return (
    <div
      className={`w-[340px] min-h-[600px] bg-white shadow-lg rounded-[25px] overflow-auto border origin-bottom-right ${
        isChatboxOpen ? "scale-100" : "scale-0"
      } transition duration-200`}
    >
      <div className="w-full h-[70px] flex justify-between items-center px-[20px] border-b border-[#E2E2E2] shadow-[0px_42px_67px_0px_rgba(122,122,122,0.1)]">
        <p className="font-bold text-blue-500 text-xl">Chatbot</p>
        <Image
          onClick={closeChatbox}
          className="cursor-pointer"
          width={30}
          height={30}
          alt="exit"
          src="/icons/sign-out-alt.svg"
        />
      </div>
      <div className="h-[350px] pt-[16px] overflow-y-auto px-2">
        {chatLog.map((chat, index) => (
          <div
            key={index}
            className={`chat ${
              chat.role === "user" ? "chat-end" : "chat-start"
            }`}
          >
            {chat.role === "assistant" && (
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <Image
                    width={50}
                    height={50}
                    alt="Tailwind CSS chat bubble component"
                    src="/chatbot.png"
                  />
                </div>
              </div>
            )}
            <div
              className={`chat-bubble ${
                chat.role === "user"
                  ? "bg-blue-200 text-slate-600"
                  : "bg-blue-500 text-slate-200"
              }`}
            >
              {chat.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <Image
                  width={50}
                  height={50}
                  alt="Tailwind CSS chat bubble component"
                  src="/chatbot.png"
                />
              </div>
            </div>
            <div className="chat-bubble bg-blue-500 text-slate-200">
              Typing...
            </div>
          </div>
        )}
      </div>
      <div className="h-[180px] px-2 flex flex-col flex-1 justify-center items-center w-full border-t border-[#E2E2E2] shadow-[0px_-42px_67px_0px_rgba(122,122,122,0.1)]">
        <div className="w-[96%] h-[80%] p-[16px] bg-slate-100 rounded-[10px] flex flex-col justify-center overflow-hidden">
          <textarea
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                getAnswer(prompt, e);
                setPrompt("");
              }
            }}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="bg-slate-100 w-full h-[110px] resize-none text-xs text-slate-600"
            style={{ border: "none", outline: "none" }}
            placeholder="Ask me questions..."
          ></textarea>
          <div className="flex justify-between items-center">
            <Image
              className="cursor-pointer"
              onClick={() => setChatLog([])}
              width={30}
              height={30}
              alt="new-chat"
              src="/icons/comment-plus.svg"
            />
            <div
              onClick={(e) => {
                getAnswer(prompt, e);
                setPrompt("");
              }}
              className="w-[27px] h-[27px] rounded-full bg-blue-200 flex justify-center items-center cursor-pointer"
            >
              <Image
                width={500}
                height={500}
                alt="submit"
                src="/icons/angle-right-b.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
