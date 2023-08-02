import { Container } from './styles';
import clipBoard from '../../../../../../public/Clipboard.png';
export default function NotFoundTasks() {
  return (
    <Container>
      <img src={clipBoard} alt="" />
      <span>Você ainda não tem tarefas cadastradas</span>
      <span> Crie tarefas e organize seus itens a fazer </span>
    </Container>
  );
}
