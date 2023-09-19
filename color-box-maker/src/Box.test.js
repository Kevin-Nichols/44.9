import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

it("renders Box (smoke test)", function() {
  render(<Box />);
});

it("snapshot test of Box", function() {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});