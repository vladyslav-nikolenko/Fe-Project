import { render } from '@testing-library/react';

import Header from '../index';
import App from '../../App';

it('renders correctly', () => {
  const tree = render(
    <App>
      <Header onLogin={() => {}} onLogout={() => {}} />
    </App>
  );

  expect(tree).toMatchSnapshot();
});
