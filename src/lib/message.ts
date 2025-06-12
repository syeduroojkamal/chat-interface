export type Message = {
  messageId: string | null;
  message: string;
  senderId: string;
  senderName: string;
  receiverId: string | null;
  roomId: string | null;
  timestamp: string | null;
  delivered: boolean;
  read: boolean;
};
