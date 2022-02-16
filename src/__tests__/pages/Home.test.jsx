import Home from './../../pages/Home';
import { render } from '@testing-library/react';

it('test home component', async () => {
  const tree = render(<Home />);
  expect(tree).toMatchSnapshot();
});
