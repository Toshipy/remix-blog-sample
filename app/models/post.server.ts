import { prisma } from "../db.server";

interface Post {
  slug: string;
  title: string;
  markdown: string;
}

export async function getPosts(): Promise<Post[]> {
  return prisma.post.findMany();
}

export async function getPost(slug: string): Promise<Post | null> {
  return prisma.post.findUnique({ where: { slug } });
}
