import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("welcome component", () => {
  it("check h1 mounts", () => {
    render(<Welcome />);

    const heading = screen.getByText(/Benvenuti in EpiBooks!/i);
    expect(heading).toBeInTheDocument();
  });
});

it("check alert element", () => {
  render(<Welcome />);

  const alertElement = screen.getByRole("alert");
  expect(alertElement).toBeInTheDocument();
});
