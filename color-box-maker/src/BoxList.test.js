import React from "react";
import {render, fireEvent} from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height = "5", width = "5", color = "green") {
  const heightInput = boxList.getByLabelText("Height:");
  const widthInput = boxList.getByLabelText("Width:");
  const backgroundInput = boxList.getByLabelText("Background Color:");
  fireEvent.change(backgroundInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  const button = boxList.getByText("Add a box");
  fireEvent.click(button);
}

it('renders BoxList (smoke test)', () => {
  render(<BoxList />);
});

it("snapshot test of BoxList", function() {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a box", function() {
  const boxList = render(<BoxList />);

  expect(boxList.queryByText("X")).not.toBeInTheDocument();

  addBox(boxList);

  const deleteButton = boxList.getByText("X");
  expect(deleteButton).toBeInTheDocument();
  
  expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
});

it("can delete a box", function() {
  const boxList = render(<BoxList />);

  addBox(boxList);

  const removeButton = boxList.getByText("X");

  fireEvent.click(removeButton);
  expect(removeButton).not.toBeInTheDocument();
});