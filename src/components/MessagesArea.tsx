import type { Message } from "../lib/message";
import MessageBubble from "./MessageBubble";
import { useEffect, useRef } from "react";

export default function MessagesArea({
  messages,
  className,
}: {
  messages: Message[];
  className: string;
}) {
  const latestMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className={className}>
      <div className="flex flex-col gap-3 p-4 bg-white">
        {messages.map((message) => (
          <MessageBubble key={message.messageId} message={message} />
        ))}
        <div ref={latestMessageRef} />
      </div>
    </div>
  );
}
