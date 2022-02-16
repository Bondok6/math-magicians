import { render } from '@testing-library/react';
import CalculatorPage from '../../pages/CalculatorPage';

it('test calculator component', async () => {
  const tree = render(<CalculatorPage />);
  expect(tree).toMatchSnapshot();
});
