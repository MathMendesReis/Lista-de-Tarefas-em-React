import { render, screen } from '@testing-library/react';
import NotFoundTasks from '../pages/Main/componetesMain/main/NotFoundTasks';

test('renders NotFoundTasks component', () => {
    render(<NotFoundTasks />);

    const imageElement = screen.getByAltText('');
    const firstSpanElement = screen.getByText('Você ainda não tem tarefas cadastradas');
    const secondSpanElement = screen.getByText('Crie tarefas e organize seus itens a fazer');

    expect(imageElement).toBeInTheDocument();
    expect(firstSpanElement).toBeInTheDocument();
    expect(secondSpanElement).toBeInTheDocument();
});