import {
  render, fireEvent, waitFor, screen,
} from '@testing-library/react';
import Calculator from '../../components/Calculator';

it('test calculator component', () => {
  const tree = render(<Calculator />);
  expect(tree).toMatchSnapshot();
});

it('test calculator click event', async () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('9'));
  const result = await waitFor(() => screen.getByTestId('display'));
  expect(result.textContent).toBe('9');
});
