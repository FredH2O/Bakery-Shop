import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders essential components", () => {
    render(<App />);

    // Check if key components are rendered
    expect(screen.getByText(/pence's bakery/i)).toBeInTheDocument(); // Adjust text based on your NavBar
    expect(screen.getByRole("button", { name: /cart/i })).toBeInTheDocument(); // Check for Cart button as a button
    expect(screen.getByRole("heading", { name: /hero/i })).toBeInTheDocument(); // Adjust for your HeroImage heading
    expect(screen.getByText(/footer/i)).toBeInTheDocument(); // Adjust for your footer content
  });

  test("adds item to cart", async () => {
    render(<App />);

    // Check if there are add buttons
    const addButtons = screen.getAllByText(/add to cart/i);
    expect(addButtons.length).toBeGreaterThan(0);

    // Click the first button to add an item to the cart
    addButtons[0].click();

    // Wait for the cart count to update
    const cartCount = await waitFor(() => screen.getByText(/cart: 1/i)); // Adjust this text to match your cart display
    expect(cartCount).toBeInTheDocument();
  });
});
