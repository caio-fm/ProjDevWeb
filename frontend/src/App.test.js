import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/react';

import React from "react";
import { render as renderD, unmountComponentAtNode} from "react-dom";
import { act } from "react-dom/test-utils"; 


test('Section names render', () => {
  render(<App />);
  const sectionName = screen.getByText(/Sony/i);
  expect(sectionName).toBeInTheDocument();
});

test('Section names render', () => {
  render(<App />);
  const sectionName = screen.getByText(/Nintendo/i);
  expect(sectionName).toBeInTheDocument();
});

test('Section names render', () => {
  render(<App />);
  const sectionName = screen.getByText(/PC/i);
  expect(sectionName).toBeInTheDocument();
});

test('Section names render', () => {
  render(<App />);
  const sectionName = screen.getByText(/Microsoft/i);
  expect(sectionName).toBeInTheDocument();
});

test('Signup rendering test', () => {
  render(<App />);
  const signup = screen.getByText('signup');
  expect(signup).toBeInTheDocument();

});


test('Section names render', () => {
  jest.spyOn(window, 'alert').mockImplementation(() => {});
  const {default: userEvent} = require('@testing-library/user-event')
  render(<App />);
  const button = screen.getByText(/Registrar/i);
  expect(button).toBeInTheDocument();
  userEvent.click(button);
  const alerta = screen.getByText();
  expect(alerta).toBeInTheDocument();



});