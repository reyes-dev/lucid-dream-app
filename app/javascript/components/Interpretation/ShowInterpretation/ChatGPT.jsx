import React from "react";
import { FaRobot } from "react-icons/fa";

function ChatGPT({ entry_id, setInterpretationBody }) {
  const createChatGPTResponse = async (event) => {
    event.preventDefault();
    const url = `/api/entries/${entry_id}/interpretation/chatgpt_response`;
    const token = document.querySelector('meta[name="csrf-token"]').content;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.text();
      setInterpretationBody(data);
      return data;
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <button
      onClick={createChatGPTResponse}
      className="min-h gap-2 whitespace-nowrap rounded border border-violet-500 p-[0.450rem_0.450rem_0.4625rem] text-xs 
                      italic text-violet-500 hover:bg-slate-700 
                      lg:flex lg:items-center lg:text-lg"
    >
      <span className="lg:text-md hidden lg:block xl:text-lg">
        Interpret with AI
      </span>
      <FaRobot />
    </button>
  );
}

export default ChatGPT;