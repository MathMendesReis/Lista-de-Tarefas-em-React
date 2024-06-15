'use client'
import { MarkCompletedTask } from "@/components/services/mark-completed-task";
import CheckCircle from "@/components/ui/icons/CheckCircle";
import CircleCheck from "@/components/ui/icons/CircleChecke";
import { TaskStatus } from "@/types/task";
import styled from "styled-components";

interface MarkCompletedProps{
    status: TaskStatus
    id: string
}
export default function MarkCompleted({status,id}:MarkCompletedProps) {

  return (
    <BthGhost onClick={()=>MarkCompletedTask(id)}>
      {status === 'pending' && <CircleCheck />}
      {status === 'completed' && <CheckCircle fill="#479C6E"/>}
    </BthGhost>
  );
}

export const BthGhost = styled.button`
    border: none;
    background-color: transparent;
    margin: auto 0;
`


