//ts:ignore

import { TasksDB } from '../..';
import NotFoundTasks from './NotFoundTasks';
import { CardsTasks } from './cardsTasks';
import { Container } from './styled';

interface Props {
  tasks: TasksDB[],
  deleteTasks: (id: string) => void;
  updateTasks:(id: string, isConcluid: boolean) => void;
}

function MainContent({tasks, deleteTasks, updateTasks}:Props) {
  const isTaskInArray:undefined | TasksDB[] = tasks.length === 0? undefined:tasks;

  return (
    <Container>
      {
        !isTaskInArray? (
          <NotFoundTasks/>
        )
          : (
          <div>
          {tasks.map((task: TasksDB)=>(
            <CardsTasks
            key={task.id}
            content={task.task}
            deleteTasks={() => deleteTasks(task.id)}
            updateTasks={() => updateTasks(task.id, !task.isConcluid)}
            id={task.id}
            />
          ))}
          </div>
        )}

    </Container>
  );
}

export default MainContent;
