import { Paragraph } from "@/components/ui/components/Typography";
import { Task } from "@/types/task";
import { BoxTaskList } from "../../ui/components/BoxTaskList";
import { TaskItem } from "../../ui/components/TaskItem";
import DeleteTask from "./delete-task";
import MarkCompleted from "./mark-completed";

interface TaskListProps{
    data:Task[] | undefined
}


export default function TaskList({ data }: TaskListProps) {
  if (data === undefined) {
  return null
}
const sortedData = [...data].sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB.getTime() - dateA.getTime(); 
    });
  return (
      <BoxTaskList id='Task list'>
        <ul>
          {sortedData.map(({id,title,status}) => (
            <TaskItem key={id}>
              <MarkCompleted status={status} id={id}/>
              <Paragraph>{title}</Paragraph>
              <DeleteTask id={id} />
          
            </TaskItem>
          ))}
        </ul>
      </BoxTaskList>
  );
}


