import { useEffect, useState } from "react";
import Header from "./components/Header";
import MessagesArea from "./components/MessagesArea";
import MessageInput from "./components/MessageInput";
import type { Message } from "./lib/message";

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
    <div className="flex flex-col h-svh" id="main-container">
      <Header />
      <MessagesArea messages={messages} />
      <MessageInput messages={messages} setMessages={setMessages} />
    </div>
  );
}

const initialMessages: Message[] = [
  {
    messageId: "1",
    message: "Hello",
    senderId: "me",
    senderName: "me",
    receiverId: "you",
    roomId: null,
    timestamp: null,
    delivered: false,
    read: false,
  },
  {
    messageId: "2",
    message: "Hi! How are you?",
    senderId: "you",
    senderName: "you",
    receiverId: "me",
    roomId: null,
    timestamp: null,
    delivered: true,
    read: false,
  },
  {
    messageId: "3",
    message: "I'm good, thanks! What about you?",
    senderId: "me",
    senderName: "me",
    receiverId: "you",
    roomId: null,
    timestamp: null,
    delivered: true,
    read: true,
  },
  {
    messageId: "4",
    message: "Doing well! Working on the chat interface.",
    senderId: "you",
    senderName: "you",
    receiverId: "me",
    roomId: null,
    timestamp: null,
    delivered: true,
    read: true,
  },
  {
    messageId: "5",
    message: "That's awesome. Let me know if you need help.",
    senderId: "me",
    senderName: "me",
    receiverId: "you",
    roomId: null,
    timestamp: null,
    delivered: true,
    read: false,
  },
  {
    messageId: "6",
    message: "Thanks! I might take you up on that.",
    senderId: "you",
    senderName: "you",
    receiverId: "me",
    roomId: null,
    timestamp: null,
    delivered: true,
    read: false,
  },
  {
    messageId: "7",
    message: "No problem. What tech stack are you using?",
    senderId: "me",
    senderName: "me",
    receiverId: "you",
    roomId: null,
    timestamp: null,
    delivered: true,
    read: false,
  },
  {
    messageId: "8",
    message: "React, TypeScript, and Tailwind CSS mostly.",
    senderId: "you",
    senderName: "you",
    receiverId: "me",
    roomId: null,
    timestamp: null,
    delivered: true,
    read: false,
  },
  {
    messageId: "9",
    message: "Nice! Tailwind makes styling so much easier.",
    senderId: "me",
    senderName: "me",
    receiverId: "you",
    roomId: null,
    timestamp: null,
    delivered: true,
    read: false,
  },
  {
    messageId: "10",
    message: "Absolutely. Let me know if you want to pair program sometime.",
    senderId: "you",
    senderName: "you",
    receiverId: "me",
    roomId: null,
    timestamp: null,
    delivered: true,
    read: false,
  },
];
