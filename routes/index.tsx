/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req, ctx) {
    try {
      const formData = await req.formData();
      const username = formData.get("username");
      return new Response(undefined, {
        headers: {
          location: `/chat/?username=${username}`,
        },
        status: 302,
      });
    } catch (error) {
      return ctx.render({ error: error.message });
    }
  },
};
export default function Home({ data }: PageProps) {
  return (
    <div className={tw`h-screen grid place-items-center bg-gray-900`}>
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <form
        method="POST"
        className={tw`max-w-md w-full p-6 bg-gray-800 rounded-md`}
      >
        <div class="mb-6">
          <label
            htmlFor="username"
            className={tw`block mb-2 text-sm font-medium text-gray-300`}
          >
            Enter Username
          </label>
          <input
            name="username"
            type="text"
            id="username"
            className={tw`bg-gray-600  text-gray-100 text-sm rounded-md focus:outline-none block w-full p-3`}
            placeholder="harshmangalam"
            required
          />
        </div>

        <button
          className={tw`px-4 py-2 bg-gray-700 focus:outline-none text-gray-100 rounded-md w-full mt-4 text-lg font-bold =`}
        >
          Join Chat
        </button>
      </form>
    </div>
  );
}
