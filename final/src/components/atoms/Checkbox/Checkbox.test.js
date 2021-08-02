


import React from "react";
import CheckboxWithGreenCheck from "./CheckBox";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("checkbox renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<CheckboxWithGreenCheck />);
    expect(asFragment()).toMatchSnapshot();
  });

});












