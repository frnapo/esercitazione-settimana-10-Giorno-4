import { render, screen } from "@testing-library/react";
import AllTheBooks from "../components/AllTheBooks";

describe("check books components", () => {
  it("check cards mounting", () => {
    render(<AllTheBooks />);

    const cardsElement = screen.getAllByTestId("card-element");
    expect(cardsElement).toHaveLength(150);
  });
});
