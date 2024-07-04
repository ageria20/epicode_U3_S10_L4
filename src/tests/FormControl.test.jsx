import { render, screen } from "@testing-library/react";
import { describe } from "vitest";

import App from "../App";
import userEvent from "@testing-library/user-event";

describe("verify search input", () => {
  it("render all the cards as many as the books", async () => {
    render(<App />);

    const searchInput = screen.getByTestId("searchInput");

    // fireEvent.change(searchInput, { target: { value: "dest" } });
    const book = userEvent.setup();

    await book.type(searchInput, "dest");

    const fileteredBook = screen.getAllByTestId("card");
    expect(fileteredBook).toHaveLength(3);
  });
});
