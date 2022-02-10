import { render } from '@testing-library/react';
import { TodoList } from '.';

describe('Tests for Todo component', () => {
  it('Should render a todo', async () => {
    const { getByText } = render(<TodoList />);

    expect(getByText).toMatchSnapshot();
  });
});
