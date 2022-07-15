/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import WebsocketProvider from "../islands/WebsocketProvider.tsx";
export const handler: Handlers = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const username = url.searchParams.get("username");
    return ctx.render({ username });
  },
  async POST(req, ctx) {
    try {
      const formData = await req.formData();
      const username = formData.get("username");
      return ctx.render({ username });
    } catch (error) {
      return ctx.render({ error: error.message });
    }
  },
};
export default function Home({ data }: PageProps) {
  return (
    <WebsocketProvider>
      <div className={tw`h-screen grid place-items-center bg-gray-900`}>
        <pre>{JSON.stringify(data, null, 4)}</pre>
      </div>
    </WebsocketProvider>
  );
}
