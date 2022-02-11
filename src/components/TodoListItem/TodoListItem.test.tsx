import { TodoListItem } from '.';

import { render } from '@testing-library/react';

describe('Tests for TodoListItem component', () => {
  it('Should render a todo', async () => {
    const todoTest = { complete: false, id: 1644511379001, text: 'test' };

    const { getByText } = render(<TodoListItem todo={todoTest} />);

    expect(getByText).toMatchSnapshot();
  });
});
describe('Tests for TodoList component', () => {
  it('Should match snapshot', async () => {
    const todoTest = { complete: false, id: 1644511379001, text: 'test' };

    const { container } = render(<TodoListItem todo={todoTest} />);

    expect(container).toMatchSnapshot();
  });
});
