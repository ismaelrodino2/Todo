import { render } from '@testing-library/react';
import { FilterTodoForm } from '.';

describe('Tests for Todo component', () => {
  it('Should render a todo', async () => {
    const todos = [{ complete: false, id: 1644511379001, text: 'test' }];
    const { getByText } = render(<FilterTodoForm todos={todos} />);

    expect(getByText).toMatchSnapshot();
  });
});
