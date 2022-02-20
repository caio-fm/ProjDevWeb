import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/react';

import React from "react";
import { render as renderD, unmountComponentAtNode} from "react-dom";
import { act } from "react-dom/test-utils"; 

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/backend/i);
  expect(linkElement).toBeInTheDocument();
});
