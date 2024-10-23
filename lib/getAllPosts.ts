import mockData from "@/mock.json";
import { PostProps } from "@/types";

export async function getAllPosts(): Promise<PostProps[]> {
  // fetch from db (this will be done next week)
  return mockData.mockPosts;
}
