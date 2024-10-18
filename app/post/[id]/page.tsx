import FullPost from "@/components/full-post";
import { getPostById } from "@/lib/getPostById";

export default async function FullPostPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  const post = await getPostById(id);

  return <div>{post ? <FullPost post={post} /> : <p>post not found</p>}</div>;
}
