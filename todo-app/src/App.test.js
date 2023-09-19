import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("is a smoke test for App", function() {
  render(<App />);
});

it("is a snapshot test for App", function() {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});