import { fireEvent, render, screen } from "@testing-library/react";
import { describe } from "vitest";

import App from "../App";

describe("verify card color change", () => {
  it("check the change color of the card", async () => {
    render(<App />);

    const allCard = screen.getAllByTestId("card");
    // console.log(allCard[0]);
    fireEvent.click(allCard[0]);
    expect(allCard).toHaveStyle({ border: "3px solid red" });
  });
});
