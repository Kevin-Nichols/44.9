import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

it("is a smoke test for Todo", function() {
  render(<Todo />);
});

it("is a snapshot test for Todo", function() {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});

it("is a snapshot test when editing", function() {
  const { getByText, asFragment } = render(<Todo />);
  const editButton = getByText("Edit Todo");
  fireEvent.click(editButton);
  expect(asFragment()).toMatchSnapshot();
});

it("updates on form submission", function() {
  const update = jest.fn();
  const { getByText } = render(<Todo update={update} />);
  const editButton = getByText("Edit Todo");
  fireEvent.click(editButton);
  const updateButton = getByText("Update Todo");
  fireEvent.click(updateButton);
  expect(update).toHaveBeenCalled();
});

it("deletes on button click", function() {
  const remove = jest.fn();
  const { getByText } = render(<Todo remove={remove} />);
  const deleteButton = getByText("X");
  fireEvent.click(deleteButton);
  expect(remove).toHaveBeenCalled();
});