/** @jsx h */
import { useEffect } from "preact/hooks";
import { ComponentChild, createContext, h } from "preact";

const Websocket = createContext(null);

export default function WebsocketProvider({
  children,
}: {
  children: ComponentChild;
}) {
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/api");
    ws.onopen = (e) => {
      console.log(e);
    };
  }, []);

  return <Websocket.Provider value={null}>{children}</Websocket.Provider>;
}
