import { TodoListItem } from '.';

import { fireEvent, render, waitFor } from '@testing-library/react';
import { TodoList } from '../TodoList';

describe('Tests for Todo component', () => {
  it('Should render a todo', async () => {
    const todoTest = { complete: false, id: 1644511379001, text: 'test' };

    const { getByText } = render(<TodoListItem todo={todoTest} />);

    const listNode = await waitFor(() => getByText('test'));

    expect(listNode).toBeDefined();
    expect(getByText).toMatchSnapshot();
  });
  it('Should delete todo when click the button', async () => {
    const todoTest = { complete: false, id: 1644511379001, text: 'test' };

    const { getByTestId: deleteButton, getByText } = render(
      <TodoListItem todo={todoTest} />,
    );

    const btnNode = await waitFor(() => deleteButton('delete-btn'));

    fireEvent.click(btnNode);

    const listNode = await waitFor(() => getByText('test'));

    fireEvent.click(btnNode);

    expect(listNode).toBeDefined();

  });
});
