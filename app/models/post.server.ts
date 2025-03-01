import { prisma } from "../db.server";

interface Post {
	slug: string;
	title: string;
}

export async function getPosts(): Promise<Post[]> {
  return prisma.post.findMany()
	// return [
	// 	{
	// 		slug: "post-1",
	// 		title: "Post 1",
	// 	},
	// 	{
	// 		slug: "post-2",
	// 		title: "Post 2",
	// 	},
	// ];
}
