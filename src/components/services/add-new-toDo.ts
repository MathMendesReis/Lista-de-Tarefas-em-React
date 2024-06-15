import { revalidateTasks } from '@/lib/actions';

export async function AddToDo<SchemaType>(data: SchemaType) {
  const res = await fetch('api/task/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    next: { tags: ['tasks'] },

  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  revalidateTasks()

  return res.json()
}

