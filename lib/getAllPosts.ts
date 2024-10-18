import mockData from "@/mock.json";
import { PostProps } from "@/types";

export async function getAllPosts(): Promise<PostProps[]> {
  return mockData.mockPosts;
}
