import { json, Link, Outlet, useLoaderData } from "@remix-run/react";

// eslint-disable-next-line import/no-unresolved
import { getPosts } from "~/models/post.server";

export const loader = async () => {
  const posts = await getPosts();
  return json({ posts });
};

export default function PostsAdmin() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">Blog Admin</h1>
      <div className="grid grid-cols-4 gap-6">
        <nav>
          <ul>
            {posts.map((post) => (
              <li key={post.slug}>
                <Link to={post.slug} className="text-blue-600 underline">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <main className="col-span-4 md:col-span-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
