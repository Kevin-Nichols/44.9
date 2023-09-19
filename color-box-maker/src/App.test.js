import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders App (smoke test)', () => {
  render(<App />);
});

it("snapshot test of App", function() {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
