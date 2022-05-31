import React from 'react';
import { render, screen } from '@testing-library/react';
import ZurichApp from './ZurichApp';

test('renders learn react link', () => {
  render(<ZurichApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
