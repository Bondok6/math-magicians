import Calculator from './../../components/Calculator';
import { render, fireEvent, waitFor } from '@testing-library/react';

it('test calculator component', () => {
  const tree = render(<Calculator />);
  expect(tree).toMatchSnapshot();
});

// it('test ', async() => {
//   render(<Calculator />);
//   fireEvent.click(screen.getByText('9'));
//   const result = await waitFor(() => screen.getByTestId(display));
//   expect(result.textContent).toBe('9');
// })
