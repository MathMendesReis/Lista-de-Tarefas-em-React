import { render, screen, fireEvent } from '@testing-library/react';
import Main, { TasksDB } from '../pages/Main';
import MainContent from '../pages/Main/componetesMain/main';


test('renders Main component', () => {
    render(<Main />);

    // Assert that the component renders without errors
    expect(screen.getByTestId('main-component')).toBeInTheDocument();
});

test('inserts new task', () => {
    render(<Main />);

    // Simulate inserting a new task
    fireEvent.change(screen.getByTestId('task-input'), { target: { value: 'New Task' } });
    fireEvent.click(screen.getByTestId('add-task-button'));

    // Assert that the new task is added to the list
    expect(screen.getByText('New Task')).toBeInTheDocument();
});

test('deletes task', () => {
    render(<Main />);

    // Simulate deleting a task
    fireEvent.click(screen.getByTestId('delete-task-button'));

    // Assert that the task is removed from the list
    expect(screen.queryByText('Task to delete')).not.toBeInTheDocument();
});

test('updates task', () => {
    render(<Main />);

    // Simulate updating a task
    fireEvent.click(screen.getByTestId('update-task-button'));

    // Assert that the task is updated
    expect(screen.getByText('Updated Task')).toBeInTheDocument();
});

test('renders main content component with tasks', () => {
    const tasks: TasksDB[] = [
        { id: '1', task: 'Task 1', isConcluid: false },
        { id: '2', task: 'Task 2', isConcluid: true },
    ];
    const deleteTasks = jest.fn();
    const updateTasks = jest.fn();

    render(<MainContent tasks={tasks} deleteTasks={deleteTasks} updateTasks={updateTasks} />);

    const taskElements = screen.getAllByTestId('task-card');
    expect(taskElements).toHaveLength(tasks.length);
});

test('renders main content component without tasks', () => {
    const tasks: TasksDB[] = [];
    const deleteTasks = jest.fn();
    const updateTasks = jest.fn();

    render(<MainContent tasks={tasks} deleteTasks={deleteTasks} updateTasks={updateTasks} />);

    const notFoundElement = screen.getByText('No tasks found');
    expect(notFoundElement).toBeInTheDocument();
});