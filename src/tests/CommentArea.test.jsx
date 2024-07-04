import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import App from "../App";

describe("component builded properly", () => {
  it("render the CommentAre component", () => {
    render(<App />);

    const comment = screen.getByTestId("comment");
    expect(comment).toHaveClass("container");
  });
});
