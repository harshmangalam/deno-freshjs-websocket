/** @jsx h */
import { useContext, useEffect, useState } from "preact/hooks";
import { ComponentChildren, createContext, h } from "preact";

interface Message {
  text: string;
  username: string;
}
interface State {
  messages: Message[];
}
const Chat = createContext<State>({ messages: [] });
export default function ChatProvider({
  children,
}: {
  children: ComponentChildren;
}) {
  const [messages, setMessages] = useState([
    { text: "shshhs", username: "sjsjhjshsh" },
  ]);
  useEffect(() => {
    console.log("hi");
    const ws = new WebSocket("ws://localhost:8000/api/socketio");
  }, []);

  return <Chat.Provider value={{ messages }}>{children}</Chat.Provider>;
}

export const useChat = () => useContext(Chat);
