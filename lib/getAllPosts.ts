import getCollection from "@/db";
import { PostProps } from "@/types";

export async function getAllPosts(): Promise<PostProps[]> {
  const postCollection = await getCollection("post-collection");
  const data = await postCollection.find().toArray();

  const posts: PostProps[] = data.map((post) => {
    return {
      title: post.title,
      content: post.content,
      upvotes: post.upvotes,
      downvotes: post.downvotes,
    };
  });

  return posts;
}
