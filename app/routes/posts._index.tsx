import { json, Link, useLoaderData } from "@remix-run/react";

// eslint-disable-next-line import/no-unresolved
import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return json({ posts: await getPosts() });
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();

  console.log(posts);
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Link className="text-red-500 underline" to="admin">
        Admin
      </Link>
    </main>
  );
}
