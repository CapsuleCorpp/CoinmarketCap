import { rest } from "msw";
import AppBar from "../Component/appBar";
import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";

test("testing the App bar ", async () => {
  const { getByTestId } = render(<AppBar />);
  const element = getByTestId("crypto-data");
  expect(element.textContent).toBe("5555");
});
