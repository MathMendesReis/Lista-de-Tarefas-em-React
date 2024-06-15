import { Task } from "@/types/task";

export async function getTasks(): Promise<Task[]> {
  const endpoint = 'http://localhost:3333/tasks'
  const response = await fetch(endpoint, { next: { tags: ['task'] } })
  return response.json()
}
