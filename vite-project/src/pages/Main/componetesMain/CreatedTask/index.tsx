//ts:ignore
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Container } from './styled';

interface Props {
  newTask: (id:string, task: string, isConcluid:boolean) => void;
}

function FormCreatedTask({newTask}:Props) {
  const [task, setTask] = useState<string>('');

  function handleNewTask(event:FormEvent) {
    event.preventDefault();
    newTask('1',task,false);
    setTask('');
  }
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }
  function handleInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Insira uma tarefa válida.');
  }

  return (
    <Container
    action='submit'
    >
      <input
      type="text"
      title='insira uma tarefa'
      required
      onChange={handleInputChange}
      defaultValue={task}
      onInvalid={handleInvalid}
      placeholder='insira uma tarefa'
      onSubmit={handleNewTask}
      />
      <button
      onClick={handleNewTask}
      type='submit'
      >criar
      </button>
    </Container>
  );
}

export default FormCreatedTask;
