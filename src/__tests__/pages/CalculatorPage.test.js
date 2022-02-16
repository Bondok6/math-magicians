import CalculatorPage from './../../pages/CalculatorPage';
import { render } from '@testing-library/react';

it('test calculator component', async () => {
  const tree = render(<CalculatorPage />);
  expect(tree).toMatchSnapshot();
});
