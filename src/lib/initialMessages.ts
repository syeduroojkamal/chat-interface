import type { Message } from "./message";

export const initialMessages: Message[] = [
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
  {
    messageId: "11",
    message: "That would be great! When are you free?",
    senderId: "me",
    senderName: "me",
    receiverId: "you",
    roomId: null,
    timestamp: null,
    delivered: true,
    read: false,
  },
  {
    messageId: "12",
    message: "I'm free this weekend. Does that work?",
    senderId: "you",
    senderName: "you",
    receiverId: "me",
    roomId: null,
    timestamp: null,
    delivered: true,
    read: false,
  },
  {
    messageId: "13",
    message: "Yes, Saturday afternoon works for me!",
    senderId: "me",
    senderName: "me",
    receiverId: "you",
    roomId: null,
    timestamp: null,
    delivered: true,
    read: false,
  },
  {
    messageId: "14",
    message: "Perfect! I'll send you a meeting link.",
    senderId: "you",
    senderName: "you",
    receiverId: "me",
    roomId: null,
    timestamp: null,
    delivered: true,
    read: false,
  },
  {
    messageId: "15",
    message: "Looking forward to it! See you then.",
    senderId: "me",
    senderName: "me",
    receiverId: "you",
    roomId: null,
    timestamp: null,
    delivered: true,
    read: false,
  },
];
