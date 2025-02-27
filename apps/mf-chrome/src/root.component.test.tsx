import React from "react";
import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const mfName = "mf-chrome";
    const { getByText } = render(<Root name={mfName} />);
    expect(getByText(mfName, { exact: false })).toBeInTheDocument();
  });
});
