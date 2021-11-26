import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
  cleanup,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import FormDialog from "../Component/AppBar/languageDialog";

test("testting dialog", async () => {
  await render(<FormDialog />);
  expect(screen.getByTestId("language-list")).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("close"));
  cleanup();

  render(<FormDialog />);
  expect(screen.queryByTestId("language-list")).toBeNull();
});
