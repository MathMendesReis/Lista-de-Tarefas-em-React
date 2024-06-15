import { revalidateTasks } from "@/lib/actions";
import { Task } from "@/types/task";

export async function deleteTask(id: string): Promise<Task[]> {
    const res = await fetch(`http://localhost:3333/tasks/${id}`, {
        method: 'DELETE',
        next: { tags: ['tasks'] },
        cache: "no-cache",
    });

    if (!res.ok) {
        throw new Error('Failed to delete the task');
    }

    const tasksData = await res.json() as Task[];
    revalidateTasks()

    return tasksData;
}
