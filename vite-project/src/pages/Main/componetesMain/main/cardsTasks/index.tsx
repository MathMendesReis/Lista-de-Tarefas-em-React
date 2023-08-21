import { ChangeEvent, useState } from 'react';
import { Container } from './styled';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  content: string;
  deleteTasks: () => void;
  id: string;
  updateTasks: () => void;
}

export function CardsTasks({ content, deleteTasks, updateTasks }: Props) {
  const [isConcluid, setIsConcluid] = useState<boolean>(false);

  function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
    setIsConcluid(event.target.checked);
  }
  return (
    <Container isConcluid={isConcluid}>
    <form action="">
    <input
        type="checkbox"
        name="isConcluid"
        id="isConcluid"
        checked={isConcluid}
        onChange={handleCheckboxChange}
        onClick={updateTasks}
        title='marcar tarefa como concluida?'
      />
    </form>
      <p
      title={`Tarefa: ${content}`}
      >{content}</p>
      <button 
      title='Apagar tarefa'
      onClick={deleteTasks}><DeleteIcon/></button>
    </Container>
  );
}
