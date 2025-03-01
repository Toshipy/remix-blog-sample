import { Form } from "@remix-run/react";

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
