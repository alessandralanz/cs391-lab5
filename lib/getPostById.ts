import getCollection from "@/db";
import { PostProps } from "@/types";
import { ObjectId } from "mongodb";

export async function getPostById(id: string): Promise<PostProps | null> {
  const postId = ObjectId.createFromHexString(id);

  const postCollection = await getCollection("post-collection");
  const data = await postCollection.findOne({ _id: postId });

  if (data === null) {
    return null;
  }

  const p = {
    id: id,
    title: data.title,
    content: data.content,
    upvotes: data.upvotes,
    downvotes: data.downvotes,
  };

  return p;
}
