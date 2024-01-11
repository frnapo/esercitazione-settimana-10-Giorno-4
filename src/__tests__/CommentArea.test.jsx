import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

describe("check CommentArea component", () => {
  it("check CommentArea mounting", () => {
    render(<CommentArea />);

    const placeholderElement = screen.getByPlaceholderText(/inserisci qui il testo/i);
    expect(placeholderElement).toBeInTheDocument();
  });
});
