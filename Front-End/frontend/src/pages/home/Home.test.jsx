import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home Page", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("renders without errors", () => {
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });

  it("displays the chart component", () => {
    expect(screen.getByTestId("chart-component")).toBeInTheDocument();
  });

  it("fetches data and renders it in the chart", async () => {
    // Mock the fetch data function
    jest.spyOn(useFetchData, "default").mockReturnValue({
      data: [10, 20, 30, 40, 50],
      loading: false,
      error: null,
    });

    // Wait for the chart to render
    await screen.findByTestId("chart-component");

    // Assert that the chart displays the fetched data
    expect(screen.getByTestId("chart-component")).toHaveTextContent("10, 20, 30, 40, 50");
  });
});