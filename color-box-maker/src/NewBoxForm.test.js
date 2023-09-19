import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it("renders NewBoxForm (smoke test)", function() {
  render(<NewBoxForm />);
});

it("snapshot test of NewBoxForm", function() {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});