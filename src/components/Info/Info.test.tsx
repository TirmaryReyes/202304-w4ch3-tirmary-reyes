import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given an Info component", () => {
  describe("When it receives a non-valid number", () => {
    test("Then it should display 'Calling...'", () => {
      const isCalling = false;

      render(<Info isCalling={isCalling} text={""} />);
      const info = screen.getByText("Calling...");

      expect(info).toBeInTheDocument();
    });
  });
});
