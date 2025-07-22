import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PayButton from "./PayButton";

describe("PayButton", () => {
  it("renders button with text", () => {
    render(<PayButton />);
    expect(screen.getByText("Pay Now")).toBeInTheDocument();
  });
});
