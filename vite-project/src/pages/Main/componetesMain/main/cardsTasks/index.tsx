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
      />
    </form>
      <p>{content}</p>
      <button onClick={deleteTasks}><DeleteIcon/></button>
    </Container>
  );
}
