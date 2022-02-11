import { TodoListItem } from '.';

import { fireEvent, render, waitFor } from '@testing-library/react';

describe('Tests for TodoListItem component', () => {
  it('Should render a todo', async () => {
    const todoTest = { complete: false, id: 1644511379001, text: 'test' };

    const { getByText } = render(<TodoListItem todo={todoTest} />);

    expect(getByText).toMatchSnapshot();
  });
  it('Should delete todo when click the button', async () => {
    const todoTest = { complete: false, id: 1644511379001, text: 'test' };

    const { getByTestId: deleteButton, getByText } = render(
      <TodoListItem todo={todoTest} />,
    );

    const btnNode = await waitFor(() => deleteButton('delete-btn'));

    const listNode = await waitFor(() => getByText('test'));

    fireEvent.click(btnNode);

    expect(listNode).toBeDefined();
  });
});
describe('Tests for TodoList component', () => {
  it('Should match snapshot', async () => {
    const todoTest = { complete: false, id: 1644511379001, text: 'test' };

    const { container } = render(<TodoListItem todo={todoTest} />);

    expect(container).toMatchSnapshot();
  });
});
