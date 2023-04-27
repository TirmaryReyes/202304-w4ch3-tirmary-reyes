import { render, screen } from "@testing-library/react";
import Key from "./Key";

describe("Given a Key component", () => {
  describe("When it is enabled and clicked", () => {
    test("Then it should call the actionOnClick function", () => {
      const mockActionOnClick = jest.fn();
      const isDisabled = false;

      render(
        <Key
          text="1"
          isBig={false}
          isDisabled={isDisabled}
          actionOnClick={mockActionOnClick}
        />
      );
      const key = screen.getByText("1");
      key.click();

      expect(mockActionOnClick).toHaveBeenCalled();
    });
  });

  describe("When it is disabled", () => {
    test("Then it should be disabled", () => {
      const isDisabled = true;

      render(
        <Key
          text="1"
          isBig={false}
          isDisabled={isDisabled}
          actionOnClick={() => void {}}
        />
      );
      const key = screen.getByText("1") as HTMLButtonElement;

      expect(key.disabled).toBe(true);
    });
  });
});
