import { render, screen } from "@testing-library/react";
import App from "./App";

test("check title", () => {
  render(<App />);
  const linkElement = screen.getByText(/pence's bakery/i);
  expect(linkElement).toBeInTheDocument();
});
