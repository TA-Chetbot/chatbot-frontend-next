import React from "react";
import Image from "next/image";

export default function ChatbotChatbox() {
  return (
    <div className="w-[340px] min-h-[600px] bg-white shadow-lg rounded-[25px] overflow-auto">
      <div className="w-full h-[70px] flex justify-between items-center px-[20px] border-b border-[#E2E2E2] shadow-[0px_42px_67px_0px_rgba(122,122,122,0.1)]">
        <p className="font-bold text-blue-500 text-xl">Chetbot</p>
          <Image
            className="cursor-pointer"
            width={30}
            height={30}
            alt="exit"
            src="/icons/sign-out-alt.svg"
          />
      </div>
      <div className="h-[350px] pt-[16px] overflow-y-auto"></div>
      <div className="h-[180px] px-2 flex flex-col flex-1 justify-center items-center w-full border-t border-[#E2E2E2] shadow-[0px_-42px_67px_0px_rgba(122,122,122,0.1)]">
        <div className="w-[96%] h-[80%] p-[16px] bg-slate-100 rounded-[10px] flex flex-col justify-center overflow-hidden">
          <textarea
            className="bg-slate-100 w-full h-[110px] resize-none text-xs"
            style={{ border: "none", outline: "none" }}
            placeholder="Ask me questions..."
          ></textarea>
          <div className="flex justify-end items-center cursor-pointer">
            <div className="w-[27px] h-[27px] rounded-full bg-blue-200 flex justify-center items-center">
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
