import { json, Link, useLoaderData } from "@remix-run/react";

import { getPosts } from "../models/post.server";

export const loader = async () => {
	return json({ posts: await getPosts() });
};

export default function Posts() {
	const { posts } = useLoaderData<typeof loader>();

	console.log(posts);
	return (
		<div>
			<h1>Posts</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.slug}>
						<Link to={`/posts/${post.slug}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
