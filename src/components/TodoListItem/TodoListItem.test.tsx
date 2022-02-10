import { TodoListItem } from '.';

import { fireEvent, render, waitFor } from '@testing-library/react';

describe('Tests for Todo component', () => {
  it('Should delete todo when clicked the button', async () => {
    const todoTest = { complete: false, id: 1644511379001, text: 'test' };

    const { getByText, getByTestId } = render(<TodoListItem todo={todoTest} />);

    const listNode = await waitFor(() => getByText('test'));

    expect(listNode).toBeDefined();

    const btnNode = await waitFor(() => getByTestId('delete-btn'));

    fireEvent.click(btnNode);
    //testar


    console.log(listNode.lastChild)
  });
});
