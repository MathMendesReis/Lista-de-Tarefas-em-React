import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { DefaultProvider } from '../../providers/default-provider';
import { FormAddTask } from './form-add-task';

describe("LoginForm", () => {
    const handleSubmit = jest.fn();
  beforeEach(() => {
    render(
        <DefaultProvider>
            <FormAddTask onSubmit={handleSubmit}/>
        </DefaultProvider> 
    );
  });

  describe("Render", () => {
      //! Testes de renderização
      it('should render E-mail input', () => {
      const taskInput = screen.getByPlaceholderText('Insira uma nova tarefa');

      expect(taskInput).toBeVisible();
      expect(taskInput).toBeInTheDocument();
      expect(taskInput).toHaveAttribute('placeholder', 'Insira uma nova tarefa');
    });
  });

  describe("Behaviour", () => {
      //! Testes de Comportamento
    it('button must be disabled', async () => {
        const addToDoButton = screen.getByTestId('add-task-button');
        expect(addToDoButton).toBeInTheDocument();
        expect(addToDoButton).toBeDisabled();
    });
  });
});