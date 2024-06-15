import { Info } from "@/components/Info";
import { FormAddToDo } from "@/components/features/form/form-add-task";
import TaskList from "@/components/features/tasks/Task-list";
import { getTasks } from "@/components/services/getTasks";
import * as S from "@/components/ui/styled-components";
import { Task } from "@/types/task";
import * as C from "../../../components/Counter";

export default async function Home() {
  const data = await getTasks()
  const tasksConcluidas = data?.filter((item) => item.completed_at === true).map((item) => item.title).length
  const totalTarefas = data?.length
  return (
    <>
      <FormAddToDo/>
      <Info>
        <C.Wrapper>
          <S.Typography.Paragraph>Tarefas criadas</S.Typography.Paragraph>
          <C.Counter>
            <S.Typography.Paragraph>
                {totalTarefas}
            </S.Typography.Paragraph>
          </C.Counter>
        </C.Wrapper>
        <C.Wrapper>
          <S.Typography.Paragraph>Conluidas</S.Typography.Paragraph>
          <C.Counter
            bgcolor="greenLigth"
            fontcolor="greenDark"
          >
            <S.Typography.Paragraph>
              {tasksConcluidas}
            </S.Typography.Paragraph>
          </C.Counter>
        </C.Wrapper>
      </Info>
      <TaskList data={data as Task[]} />
    </>
  );
}


