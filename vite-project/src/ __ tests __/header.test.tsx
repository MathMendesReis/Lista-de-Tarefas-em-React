import { render, screen } from '@testing-library/react';
import { Header } from '../pages/Main/componetesMain/header';

test('renders header component', () => {
    render(<Header />);

    const logoElement = screen.getByAltText('logo');
    const todoElement = screen.getByText('todo');

    expect(logoElement).toBeInTheDocument();
    expect(todoElement).toBeInTheDocument();
});