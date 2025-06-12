import type { Message } from "../lib/message";
import MessageBubble from "./MessageBubble";
import { useEffect, useRef } from "react";

export default function MessagesArea({ messages }: { messages: Message[] }) {
  const latestMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="grow flex flex-col gap-3 overflow-y-auto p-4">
      {messages.map((message) => (
        <MessageBubble key={message.messageId} message={message} />
      ))}
      <div ref={latestMessageRef} />
    </div>
  );
}
