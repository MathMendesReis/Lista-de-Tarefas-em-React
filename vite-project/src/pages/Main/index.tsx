//ts:ignore
import React, { useState } from 'react';
import { Container } from './styled';
import { Header } from './componetesMain/header';
import FormCreatedTask from './componetesMain/CreatedTask';

function Main() {
  interface TasksDB {
    id:string,
    task:string,
    isConcluid:boolean,
  }
  const [data, setData] = useState<TasksDB[]>([]);

  function insertNewTask(id:string, task:string, isConcluid:boolean) {
    const newTask:TasksDB = {
      id,
      task,
      isConcluid,
    };
    setData([...data,newTask]);
  }

  return (
    <Container>
      <Header/>
      <FormCreatedTask
      newTask={insertNewTask}
      />
    </Container>
  );
}

export default Main;
