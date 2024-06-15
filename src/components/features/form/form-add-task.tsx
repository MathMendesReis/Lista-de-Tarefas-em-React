'use client'
import useFormCustom from "@/components/hooks/use-form-custom";
import { AddToDo } from "@/components/services/add-new-toDo";
import * as S from "@/components/ui/styled-components";
import { PlusCircle } from "@phosphor-icons/react";
import { schema } from "../../../components/features/form/utils/schema";
import { BtnText } from "../../ui/components/Typography";
import { Form } from "./style/Form";



interface FormAddTaskProps{
  onSubmit: <T>(data: T) => void
}
export function FormAddTask({onSubmit}
  :
  FormAddTaskProps) {
    const { register, handleSubmit, formState: { isValid, isSubmitting } } = useFormCustom({ schema })

  return (
    <Form 
      onSubmit={handleSubmit(onSubmit)}
    >
      <S.Input.PrimaryInput
        data-testid="add-task"
        placeholder="Insira uma nova tarefa"
        aria-label="add-task"
        type="text"
        {...register('title')} />
      <S.Button.DefaultButton
        data-testid="add-task-button"
        type="submit"
        disabled={!isValid}>
        {!isSubmitting &&<PlusCircle size={20} />}
        {!isSubmitting &&<BtnText as='span'>Criar</BtnText>}
        {isSubmitting &&<BtnText as='span'>Loading</BtnText>}
        </S.Button.DefaultButton>
      </Form>
    
  );
}

export function FormAddToDo() {
  return (
      <FormAddTask
      onSubmit={AddToDo}
      />
  )
}
