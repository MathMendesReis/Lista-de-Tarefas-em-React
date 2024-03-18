import { render, screen, fireEvent } from '@testing-library/react';
import FormCreatedTask from '../pages/Main/componetesMain/CreatedTask';

test('renders the form correctly', () => {
    render(<FormCreatedTask newTask={jest.fn()} />);

    const inputElement = screen.getByPlaceholderText('insira uma tarefa');
    const buttonElement = screen.getByText('criar');

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
});

test('calls newTask function with correct task value', () => {
    const mockNewTask = jest.fn();
    render(<FormCreatedTask newTask={mockNewTask} />);

    const inputElement = screen.getByPlaceholderText('insira uma tarefa');
    const buttonElement = screen.getByText('criar');

    fireEvent.change(inputElement, { target: { value: 'Task 1' } });
    fireEvent.click(buttonElement);

    expect(mockNewTask).toHaveBeenCalledWith('Task 1', false);
});

test('disables the button when task is empty', () => {
    render(<FormCreatedTask newTask={jest.fn()} />);

    const inputElement = screen.getByPlaceholderText('insira uma tarefa');
    const buttonElement = screen.getByText('criar');

    expect(buttonElement).toBeDisabled();

    fireEvent.change(inputElement, { target: { value: 'Task 1' } });

    expect(buttonElement).not.toBeDisabled();

    fireEvent.change(inputElement, { target: { value: '' } });

    expect(buttonElement).toBeDisabled();
});