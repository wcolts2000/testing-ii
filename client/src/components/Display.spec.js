import "jest-dom/extend-expect";
import React from "react";
import { cleanup, render } from "react-testing-library";
import Display from "./Display";

afterEach(cleanup);

// describe("<Display/>", () => {
//   it("renders the display component", async () => {
//     const { getByTestId, debug } = render(<Display />);
//     debug();
//     const title = await waitForElement(() => {
//       getByTestId("display");
//     });

//     expect(getByTestId("display")).toHaveTextContent("Display");
//   });
// });
describe("<Display/>", () => {
  test("renders the display component", async () => {
    const { getByTestId, debug } = await render(<Display currentState />);
    debug();
    const title = getByTestId("display");

    expect(title).toHaveTextContent(/display/i);
  });
});
