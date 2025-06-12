import { useState } from "react";
import type { Message } from "../lib/message";
import type { Dispatch, SetStateAction } from "react";

export default function MessageInput({
  messages,
  setMessages,
}: {
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
}) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages([
      ...messages,
      {
        messageId: (messages.length + 1).toString(),
        message: trimmed,
        senderId: "me",
        senderName: "me",
        receiverId: "you",
        roomId: null,
        timestamp: new Date().toISOString(),
        delivered: false,
        read: false,
      },
    ]);
    setInput("");
  }

  return (
    <form
      className="flex items-center gap-4 p-4 border-t"
      onSubmit={handleSubmit}
    >
      <input
        placeholder="Type message here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-label="Message input"
        className="grow h-10 border-2 border-blue-200 py-6 px-4 rounded-2xl"
      />
      <button
        type="submit"
        disabled={!input.trim()}
        aria-label="Send message"
        className="border-2 border-blue-300 size-12 bg-blue-200 rounded-full"
      >
        Send
      </button>
    </form>
  );
}
