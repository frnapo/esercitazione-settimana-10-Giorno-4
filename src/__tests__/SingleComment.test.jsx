import { render, screen } from "@testing-library/react";
import App from "../App";

describe("check single book", () => {
  it("check selected", () => {
    render(<App />);

    const singleCommentElement = screen.queryAllByTestId("single-comment");
    expect(singleCommentElement).toHaveLength(0);
  });
});
