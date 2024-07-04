import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import Welcome from "../component/Welcome";

describe("component build correctly", () => {
  it("render the Welcome component", () => {
    render(<Welcome />);

    screen.debug();
  });
});
