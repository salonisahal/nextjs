import { render } from "@testing-library/react";

import HomePage from "./page";

test("renders without crashing", () => {
  render(<HomePage />);
});
