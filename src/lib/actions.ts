'use server'

import { revalidatePath, revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

export async function revalidateTasks() {
  revalidateTag('task')
  redirect('/')
}

export async function revalidateTodos() {
  revalidateTag('todos')
  redirect('/')
}

export async function revalidateAll() {
  revalidatePath('/')
  redirect('/')
}