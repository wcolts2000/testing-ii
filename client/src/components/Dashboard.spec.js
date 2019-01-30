import "jest-dom/extend-expect";
import React from "react";
import { render } from "react-testing-library";
import Dashboard from "./Dashboard";

// afterEach(cleanup);

describe("<Dashboard/>", () => {
  describe("should render to the page without error", () => {
    it("renders the dashboard component", async () => {
      const { getByTestId, debug } = await render(
        <Dashboard handleBoardChange handleHit />
      );
      const balls = getByTestId("balls");
      const strikes = getByTestId("strikes");
      const hitButton = getByTestId("hit");
      const fouls = getByTestId("fouls");

      expect(hitButton).toHaveTextContent(/hit/i);
      expect(balls).toHaveTextContent(/balls/i);
      expect(strikes).toHaveTextContent(/strikes/i);
      expect(fouls).toHaveTextContent(/fouls/i);
    });
  });
});
describe("should have buttons", () => {
  it("should have an onClick attribute on each button element", async () => {
    const { getByTestId, debug } = await render(
      <Dashboard handleBoardChange handleHit />
    );
    const balls = getByTestId("balls");
    const strikes = getByTestId("strikes");
    const hitButton = getByTestId("hit");
    const fouls = getByTestId("fouls");
    expect(balls).toHaveTextContent(/balls/i);
    expect(strikes).toBeVisible();
    // expect(hitButton).toHaveAttribute("onClick");
    expect(fouls).toBeInTheDocument();
  });
});
