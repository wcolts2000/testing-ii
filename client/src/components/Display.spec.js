import "jest-dom/extend-expect";
import React from "react";
import { cleanup, render } from "react-testing-library";
import Display from "./Display";

afterEach(cleanup);

describe("<Display/>", () => {
  it("renders the display component", async () => {
    const { getByTestId, debug } = await render(<Display currentState />);
    debug();
    const title = getByTestId("display");
    const balls = getByTestId("balls");
    const strikes = getByTestId("strikes");
    const fouls = getByTestId("fouls");

    expect(title).toHaveTextContent(/display/i);
    expect(balls).toHaveTextContent(/balls/i);
    expect(strikes).toHaveTextContent(/strikes/i);
    expect(fouls).toHaveTextContent(/fouls/i);
  });
});
