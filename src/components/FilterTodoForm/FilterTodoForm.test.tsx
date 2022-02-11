import { render } from '@testing-library/react';
import { FilterTodoForm } from '.';

describe('Tests for FilterTodoForm component', () => {
  it('Should match snapshot', async () => {
    const { container } = render(<FilterTodoForm />);

    expect(container).toMatchSnapshot();
  });
});
