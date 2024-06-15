import { revalidateTasks } from "@/lib/actions";
import { Task } from "@/types/task";

async function getTask(id: string): Promise<Task> {
    const res = await fetch(`http://localhost:3333/tasks/${id}`, {
        method: 'GET',
        cache: "no-cache",
        next: { tags: ['tasks'] },

    });

    if (!res.ok) {
        throw new Error('Failed to fetch the task');
    }

    const taskData = await res.json() as Task;
    revalidateTasks()

    return taskData;
}

async function updateTask(id: string, updates: Partial<Task>): Promise<Task> {
    const res = await fetch(`http://localhost:3333/tasks/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
        cache: "no-cache",
    });

    if (!res.ok) {
        throw new Error('Failed to update the task');
    }

    const updatedTaskData = await res.json() as Task;
    return updatedTaskData;
}

export async function MarkCompletedTask(id: string): Promise<void> {
    const task = await getTask(id);
    if (!task) {
        throw new Error('Failed to fetch data');
    }
    const updatedTask = {
        ...task,
        status: "completed",
        completed_at: true,
        updatedAt: new Date().toISOString(),
    };

    const updated = await updateTask(id, updatedTask as Task) ;

    console.log(updated);
}
