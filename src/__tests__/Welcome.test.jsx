import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("welcome component", () => {
  it("mounts the h1 correctly", () => {
    render(<Welcome />);

    const heading = screen.getByText(/Benvenuti in EpiBooks!/i);
    expect(heading).toBeInTheDocument();

    const alertElement = screen.getByRole("alert");
    expect(alertElement).toBeInTheDocument();
  });
});
