import getCollection, { POSTS_COLLECTION } from "@/db";
import { PostProps } from "@/types";

export async function getAllPosts(): Promise<PostProps[]> {
  const postCollection = await getCollection(POSTS_COLLECTION);
  const data = await postCollection.find().toArray();
  const cursor = postCollection.find();
  cursor.toArray;

  const posts: PostProps[] = data.map((post) => {
    return {
      id: post._id.toHexString(),
      title: post.title,
      content: post.content,
      upvotes: post.upvotes,
      downvotes: post.downvotes,
    };
  });

  return posts;
}
