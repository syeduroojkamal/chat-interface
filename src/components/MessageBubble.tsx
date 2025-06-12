import type { Message } from "../lib/message";

export default function MessageBubble({ message }: { message: Message }) {
  if (message.senderId === "me") {
    return (
      <p className="bg-blue-300 self-end p-4 rounded-2xl">{message.message}</p>
    );
  }
  return (
    <p className="bg-slate-200 self-start p-4 rounded-2xl">{message.message}</p>
  );
}
