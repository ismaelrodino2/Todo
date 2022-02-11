import { render } from '@testing-library/react';
import { TodoList } from '.';

describe('Tests for TodoList component', () => {
  it('Should match snapshot', async () => {
    const { container } = render(<TodoList />);

    expect(container).toMatchSnapshot();
  });
});
