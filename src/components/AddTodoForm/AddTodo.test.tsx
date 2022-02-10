import { AddTodoForm } from '.';

import { render, waitFor } from '@testing-library/react';

describe('Tests for Todo component', () => {
  it('Should add now  when form has been submited', async () => {
    const { getByTestId } = render(<AddTodoForm />);
    const fieldNode = await waitFor(() => getByTestId('form-field'));
    console.log(fieldNode);
  });
});
