"use client";
import { PostProps } from "@/types";
import { ThumbDown, ThumbUp } from "@mui/icons-material";

export default function PostPreview({ post }: { post: PostProps }) {
  const voteDivStyles = "p-2 m-1";
  return (
    <div className="bg-sky-400 rounded-xl p-4 m-2 w-96">
      <h4 className="font-bold text-3xl">{post.title}</h4>
      <div className="flex">
        <button className={voteDivStyles} onClick={() => post.upvotes++}>
          {post.upvotes} <ThumbUp />
        </button>
        <button className={voteDivStyles}>
          {post.upvotes} <ThumbDown />
        </button>
      </div>
    </div>
  );
}
