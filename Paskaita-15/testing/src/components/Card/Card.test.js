import Card from "./Card.js";

import { render, screen } from "@testing-library/react";

describe("Card component", () => {
  it("should render without errors", () => {
    render(<Card />);
  });

  it("should render quote text", () => {
    render(<Card />);

    const quoteElement = screen.getByTestId("quote-text").textContent;

    expect(quoteElement).toBe(
      '"There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors."'
    );
  });

  it("should render quote author", () => {
    render(<Card />);

    const authorElement = screen.getByTestId("quote-author").textContent;

    expect(authorElement).toBe("Jeff Atwood");
  });

  it("should render Twitter button", () => {
    render(<Card />);

    const twitterButton = screen.getByTestId("twitter-button").textContent;

    expect(twitterButton).toBe("View on Twitter");
  });

  it("should render Facebook button", () => {
    render(<Card />);

    const facebookButton = screen.getByTestId("facebook-button").textContent;

    expect(facebookButton).toBe("Share on Facebook");
  });
});
