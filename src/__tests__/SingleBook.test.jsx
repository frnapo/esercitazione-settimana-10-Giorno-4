import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("check single book", () => {
  it("check selected", () => {
    render(<App />);

    const allTheBooks = screen.getAllByTestId("card-selected");
    const firstBook = allTheBooks[0];
    fireEvent.click(firstBook);
    expect(firstBook).toHaveStyle("border: 3px solid red");
    const secondBook = allTheBooks[1];
    fireEvent.click(secondBook);
    expect(secondBook).toHaveStyle("border: 3px solid red");
    expect(firstBook).not.toHaveStyle("border: 3px solid red");
  });
});
