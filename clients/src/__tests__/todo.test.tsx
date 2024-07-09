
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import Todo from '../page/Todo';
import Swal from 'sweetalert2';

// Mocking Swal
jest.mock('sweetalert2', () => ({
  fire: jest.fn().mockResolvedValue({ isConfirmed: true }),
}));

describe('Todo Component', () => {
  test('renders Todo component and displays initial elements', () => {
    render(<Todo />);

    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('search...')).toBeInTheDocument();
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
  });

  test('opens AddEditTodo modal on Add Todo button click', () => {
    render(<Todo />);

    fireEvent.click(screen.getByText('Add Todo'));

    expect(screen.getByText('Add/Edit Todo')).toBeInTheDocument();
  });

  test('filters todos based on search input', () => {
    render(<Todo />);

    const searchInput = screen.getByPlaceholderText('search...');
    fireEvent.change(searchInput, { target: { value: 'sample todo' } });

    // Assuming there is a todo with the title 'sample todo' in the initial state
    expect(screen.getByText('sample todo')).toBeInTheDocument();
  });

  test('deletes a todo when delete button is clicked', async () => {
    render(<Todo />);

    // Assuming there is a todo with the title 'sample todo' in the initial state
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    // Simulate the SweetAlert confirmation
    await Swal.fire();

    // Assuming the todo is deleted after confirmation
    expect(screen.queryByText('sample todo')).not.toBeInTheDocument();
  });
});