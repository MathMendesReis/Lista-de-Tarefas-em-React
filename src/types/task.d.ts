type TaskStatus = 'pending' | 'completed' ;
export interface Task{
  id: string
  title: string
  status: TaskStatus
  completed_at: boolean
  createdAt: string
  updatedAt: string
}

export type TaskUpdate = Partial<Omit<Task, 'id'>> & { id: string };
export type TaskCreate = Partial<Omit<Task, 'title'>> & { title: string };
