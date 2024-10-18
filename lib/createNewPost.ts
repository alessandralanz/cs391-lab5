"use server";
import getCollection from "@/db";
import { PostProps } from "@/types";

export async function createNewPost(
  title: string,
  content: string,
): Promise<PostProps | null> {
  const p = {
    title: title,
    content: content,
    upvotes: 0,
    downvotes: 0,
  };

  const postCollection = await getCollection("post-collection");
  const res = await postCollection.insertOne(p);

  return res.acknowledged ? p : null;
}
