import type { ActionFunctionArgs } from "@remix-run/node";
import { Form, json, redirect } from "@remix-run/react";

import { createPost } from "../models/post.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const markdown = formData.get("markdown") as string;

  const errors = {
    title: title ? null : "Title is required",
    slug: slug ? null : "Slug is required",
    markdown: markdown ? null : "Markdown is required",
  };

  const hasErrors = Object.values(errors).some((error) => error !== null);

  if (hasErrors) {
    return json({ errors });
  }

  await createPost({ title, slug, markdown });
  return redirect("/posts/admin");
};

export default function NewPost() {
  return (
    <div>
      <h1>New Post</h1>
      <Form method="post">
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            className="w-full rounded border border-gray-500 p-2"
          />
        </div>
        <div>
          <label htmlFor="slug">Slug</label>
          <input
            type="text"
            name="slug"
            className="w-full rounded border border-gray-500 p-2"
          />
        </div>
        <div>
          <label htmlFor="markdown">Markdown:</label>
          <textarea
            id="markdown"
            name="markdown"
            rows={20}
            className="w-full rounded border border-gray-500 p-2"
          />
        </div>
        <button type="submit" className="rounded bg-blue-500 p-2 text-white">
          Create Post
        </button>
      </Form>
    </div>
  );
}
