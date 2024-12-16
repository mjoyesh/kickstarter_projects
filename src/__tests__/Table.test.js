import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "../components/Table.js";

const mockData = [
  { "percentage.funded": 120, "amt.pledged": 10573 },
  { "percentage.funded": 95, "amt.pledged": 8500 },
];

test("renders table headers", () => {
  render(<Table data={mockData} startIndex={0} />);
  expect(screen.getByText(/S.No./i)).toBeInTheDocument();
  expect(screen.getByText(/Percentage Funded/i)).toBeInTheDocument();
  expect(screen.getByText(/Amount Pledged/i)).toBeInTheDocument();
});

test("renders table data correctly", () => {
  render(<Table data={mockData} startIndex={0} />);
  expect(screen.getByText("1")).toBeInTheDocument();
  expect(screen.getByText("120%")).toBeInTheDocument();
  expect(screen.getByText("$10,573")).toBeInTheDocument();

  expect(screen.getByText("2")).toBeInTheDocument();
  expect(screen.getByText("95%")).toBeInTheDocument();
  expect(screen.getByText("$8,500")).toBeInTheDocument();
});
