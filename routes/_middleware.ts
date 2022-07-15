import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { handleWebsocket } from "../utils/websocket.ts";

export async function handler(req: Request, ctx: MiddlewareHandlerContext) {
  if (req.headers.get("upgrade") === "websocket") {
    const { response, socket } = Deno.upgradeWebSocket(req);
    handleWebsocket(socket);
    return response;
  }

  const resp = await ctx.next();

  return resp;
}
