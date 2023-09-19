import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("is a smoke test for NewTodoForm", function() {
  render(<NewTodoForm />);
});

it("is a snapshot test for NewTodoForm", function() {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});