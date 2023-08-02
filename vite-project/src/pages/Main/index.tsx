//ts:ignore
import { useState } from 'react';
import { Container } from './styled';
import { Header } from './componetesMain/header';
import FormCreatedTask from './componetesMain/CreatedTask';
import MainContent from './componetesMain/main';
import uuid from 'react-uuid';



export interface TasksDB {
  id:string,
  task:string,
  isConcluid:boolean,
}
function Main() {
  const [data, setData] = useState<TasksDB[]>([]);
  const tasksConcluidas = data.filter((task)=> task.isConcluid === true);

  function insertNewTask(task:string, isConcluid:boolean) {
    const newTask:TasksDB = {
      id:uuid(),
      task,
      isConcluid,
    };
    setData([...data, newTask]);

  }

  function DeleteTakst(id:string) {
    const newArray = data.filter((task)=> task.id !== id);
    setData(newArray);
  }

  function updateTasks(id: string, isConcluid: boolean) {
    const updatedData = data.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isConcluid,
        };
      }
      return task;
    });
    setData(updatedData);
  }



  return (
    <Container>
      <Header/>
      <FormCreatedTask
      newTask={insertNewTask}
      />
      <section>
        <span>
          Tarefas criadas:
          {' '}
          <strong>{data.length}</strong>
        </span>
        <span>
          Tarefas concluidas:
          {' '}
          <strong>{tasksConcluidas.length} de {data.length}</strong>
        </span>
      </section>
      <MainContent
      deleteTasks={DeleteTakst}
      tasks={data}
      updateTasks={updateTasks}
      />
    </Container>
  );
}

export default Main;
