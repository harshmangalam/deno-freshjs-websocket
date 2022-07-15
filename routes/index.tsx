/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { PageProps } from "$fresh/server.ts";
import WebsocketProvider from "../islands/WebsocketProvider.tsx";

export default function Home({ data }: PageProps) {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <WebsocketProvider>
        <pre>{JSON.stringify(data, null, 4)}</pre>
      </WebsocketProvider>
    </div>
  );
}
