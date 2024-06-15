'use client'
import { deleteTask } from "@/components/services/delete-task";
import { GhostButton } from "@/components/ui/components/Button";
import { Trash } from "@/components/ui/icons";

interface DeleteTaskProps{
    id: string
}
export default function DeleteTask({id}:DeleteTaskProps) {

  return (
    <GhostButton onClick={()=>deleteTask(id)}>
        <Trash/>
    </GhostButton>
  );
}


