import { Task } from "@/types/task";
import { NextResponse } from "next/server";
 
export async function GET(req: Request) {
    try {

        const res = await fetch('http://localhost:3333/tasks', {
            cache:'no-store',
             next: { tags: ['tasks'] },
            });
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        const tasksData = await res.json() as Task[];
        return new NextResponse(JSON.stringify(tasksData), { status: 200 });

    } catch (error) {
        console.log(error)
        return new NextResponse("Internal error",{status:500})
    }
}
    



