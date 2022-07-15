/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import ChatProvider from "../islands/ChatProvider.tsx";

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
    <div>
      <Head>
        <title>Chat</title>
        <link rel="stylesheet" href="scrollbar.css" />
      </Head>
      <ChatProvider>
        <div className={tw`h-screen grid place-items-center bg-gray-900`}>
          <div
            className={tw`max-w-6xl w-full h-[80%] bg-gray-800  flex flex-col px-4 py-4 overflow-y-hidden`}
          >
            <div
              className={tw`h-[90%] flex flex-col space-y-4 overflow-y-auto py-6 scrollbar`}
            >
              {[... new Array(3)].map((message) => (
                <div
                  className={tw`text-gray-100 bg-gray-600 px-4 py-3 rounded-md`}
                >
                  <span className={tw`font-bold text-gray-300`}>
                    harshmangalam
                  </span>{" "}
                  - Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Minima, quos eum ipsam dolores ipsum laborum quisquam tempora
                  repellendus modi itaque atque accusamus in, sunt
                  exercitationem sit. Nostrum vitae temporibus repellat?
                </div>
              ))}
            </div>
            <div className={tw`h-[10%] flex items-center space-x-2`}>
              <div className={tw`flex-1`}>
                <input
                  type="text"
                  className={tw`w-full bg-gray-600  text-gray-100 text-sm rounded-md focus:outline-none block w-full px-4 py-3 rounded-full`}
                  placeholder="Start typing message..."
                  required
                  aria-label="Message Input Box"
                />
              </div>
              <button
                className={tw`px-4 py-2 bg-gray-700 focus:outline-none text-gray-100 rounded-md text-lg font-bold rounded-full hover:bg-gray-600`}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </ChatProvider>
    </div>
  );
}
