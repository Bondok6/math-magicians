import Quote from './../../pages/Quote';
import { render } from '@testing-library/react';

it('test quote component', async () => {
  const tree = render(<Quote />);
  expect(tree).toMatchSnapshot();
});
