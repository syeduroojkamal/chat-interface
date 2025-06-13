import { useEffect, useState } from "react";
import Header from "./components/Header";
import MessagesArea from "./components/MessagesArea";
import MessageInput from "./components/MessageInput";
import type { Message } from "./lib/message";
import { initialMessages } from "./lib/initialMessages";

export default function App() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  useEffect(() => {
    const updateHeight = () => {
      const height = window.visualViewport?.height;
      if (height) {
        const mainContainer = document.getElementById("main-container");
        if (mainContainer) {
          mainContainer.style.height = `${height}px`;
        }
      }
    };

    window.visualViewport?.addEventListener("resize", updateHeight);
    updateHeight();

    return () =>
      window.visualViewport?.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="bg-black flex flex-col h-svh" id="main-container">
      <Header className="" />
      <MessagesArea className="overflow-y-scroll" messages={messages} />
      <MessageInput
        className=""
        messages={messages}
        setMessages={setMessages}
      />
    </div>
  );
}
