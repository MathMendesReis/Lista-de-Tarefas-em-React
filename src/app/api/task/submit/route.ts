import { Task, TaskCreate } from "@/types/task";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
 
export async function POST(req: Request) {
    try {
        const { title }: TaskCreate = await req.json()
         const UUID = randomUUID();

        const task: Task = {
            id: UUID,
            title: title,
            status: 'pending', 
            completed_at: false, 
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString() 
        };
        const res = await fetch(`http://localhost:3333/tasks`, { cache: 'no-store', method: 'POST', body: JSON.stringify(task) })
        return new NextResponse(JSON.stringify(res), { status: 201 });

    } catch (error) {
        console.log(error)
        return new NextResponse("Internal error",{status:500})
    }
}
    



