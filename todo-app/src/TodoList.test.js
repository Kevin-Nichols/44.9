import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function create(todoList, todo = "clean house") {
  const todoInput = todoList.getByLabelText("Todo:");
  const Button = todoList.getByText("Add Todo");
  fireEvent.change(todoInput, { target: { value: todo }});
  fireEvent.click(Button);
}

it("is a smoke test for TodoList", function() {
  render(<TodoList />);
});

it("is a snapshot test for TodoList", function() {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("create a todo", function() {
  const todoList = render(<TodoList />);
  create(todoList);

  expect(todoList.getByLabelText("Todo:")).toHaveValue("");
  expect(todoList.getByText("clean house")).toBeInTheDocument();
  expect(todoList.getByText("Edit Todo")).toBeInTheDocument();
  expect(todoList.getByText("X")).toBeInTheDocument();
});

it("edits a todo", function() {
  const todoList = render(<TodoList />);
  create(todoList);

  fireEvent.click(todoList.getByText("Edit Todo"));
  const editInput = todoList.getByDisplayValue("clean house");
  fireEvent.change(editInput, { target: { value: "do school" }});
  fireEvent.click(todoList.getByText("Update Todo"));

  expect(todoList.getByText("do school")).toBeInTheDocument();
  expect(todoList.queryByText("clean house")).not.toBeInTheDocument();
});

it("deletes a todo", function() {
  const todoList = render(<TodoList />);
  create(todoList);

  fireEvent.click(todoList.getByText("X"));

  expect(todoList.queryByText("clean house")).not.toBeInTheDocument();
});