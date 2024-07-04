import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import App from "../App";
import fantasy from "../data/history.json";

describe("verify cards and books", () => {
  it("render all the cards as many as the books", () => {
    render(<App />);

    const allCards = screen.getAllByTestId("card");
    expect(allCards).toHaveLength(fantasy.length);
  });
});
