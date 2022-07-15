export const handleWebsocket = (socket: WebSocket) => {
  socket.onopen = (e) => {
    console.log("opened websocket connection");
  };

  socket.onclose = (e) => {
    console.log("closed websocket connection");
  };

  socket.onerror = (e) => {
    console.log("error while websocket connection");
  };
  socket.onmessage = (e) => {
    console.log("new message in websocket");
  };
};
