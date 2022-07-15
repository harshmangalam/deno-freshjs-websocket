import { Handlers } from "$fresh/server.ts";
import { handleWebsocket } from "../../utils/websocket.ts";
export const handler: Handlers = {
  GET(req) {
    if (req.headers.get("upgrade") === "websocket") {
      const { response, socket } = Deno.upgradeWebSocket(req);
      handleWebsocket(socket);
      return response;
    }

    return new Response();
  },
};
