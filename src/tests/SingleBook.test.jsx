import { fireEvent, render, screen } from "@testing-library/react";
import { describe } from "vitest";

import App from "../App";

describe("verify card color change", () => {
  it("check the change color of the card", async () => {
    render(<App />);

    const allCard = screen.getAllByTestId("card");
    const card = allCard[0];
    fireEvent.click(card);
    expect(card).toHaveStyle({ border: "3px solid red" });
  });
});
