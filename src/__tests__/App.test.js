import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders the heading", () => {
  render(<App />);
  const headingElement = screen.getByText(
    /welcome to the kickstarter project/i
  );
  expect(headingElement).toBeInTheDocument();
});

test("pagination buttons are disabled/enabled correctly", async () => {
  render(<App />);

  // Initial state: Previous should be disabled, Next enabled
  const prevButton = screen.getByText(/Previous/i);
  const nextButton = screen.getByText(/Next/i);

  expect(prevButton).toBeDisabled();
  expect(nextButton).not.toBeDisabled();

  // Simulate clicking the next button
  fireEvent.click(nextButton);
  expect(prevButton).not.toBeDisabled();
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
