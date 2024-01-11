import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("check single comment", () => {
  it("check comment not in DOM", () => {
    render(<App />);

    const singleCommentElement = screen.queryAllByTestId("single-comment");
    expect(singleCommentElement).toHaveLength(0);
  });

  it("check comments click & load", async () => {
    render(<App />);
    const allTheBooks = screen.getAllByTestId("card-selected");
    const firstBook = allTheBooks[0];
    fireEvent.click(firstBook);
    const singleCommentElement = await screen.findAllByTestId("single-comment");
    expect(singleCommentElement).not.toHaveLength(0);
  });
});
