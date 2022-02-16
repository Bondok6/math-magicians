import Calculator from './../../components/Calculator';
import { render, fireEvent, waitFor } from '@testing-library/react';

it('test calculator component', async () => {
  const tree = render(<Calculator />);
  expect(tree).toMatchSnapshot();

  // fireEvent.click(screen.getByText('9'));
  // const result = await waitFor(() => screen.getById(display));
  // expect(result.textContent).toBe('9');
});
