import { AddTodoForm } from '.';
import { TodoList } from '../TodoList';

import { render, waitFor, fireEvent } from '@testing-library/react';

describe('Tests for Todo component', () => {
  it('Should add todo when form has been submited', async () => {
    const { getByTestId } = render(<AddTodoForm />);
    const { getByText: getList } = render(<TodoList />);
    const fieldNode = await waitFor(() => getByTestId('form-field'));
    const newTask = 'testing';
    fireEvent.change(fieldNode, { target: { value: newTask } });
    expect((fieldNode as HTMLInputElement).value).toEqual(newTask);

    const btnNode = await waitFor(() => getByTestId('form-btn'));
    fireEvent.click(btnNode);

    const listNode = await waitFor(() => getList(newTask));

    expect(listNode).toBeDefined()
    expect(getByTestId).toMatchSnapshot();

  });
});
