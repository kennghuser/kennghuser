import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Discover More button', () => {
  render(<App />);
  const discoverMoreButton = screen.getByRole('button', { name: /discover more/i });
  expect(discoverMoreButton).toBeInTheDocument();
});
