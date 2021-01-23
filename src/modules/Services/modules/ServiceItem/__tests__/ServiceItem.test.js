import { fireEvent, render, screen } from "@testing-library/react";
import ServiceItem from "../";

test("renders ServiceItem correctly with data", () => {
  const mockData = {
    title: "mock_title",
    description: "mock_description",
    promo_code: "mock_promo_code",
    is_activated: false,
  };
  render(<ServiceItem {...mockData} />);
  const title = screen.getByRole("heading");
  expect(title).toHaveTextContent("mock_title");

  const promoCode = screen.getByRole("textbox");
  expect(promoCode).toHaveValue("mock_promo_code");

  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Activate bonus");
  fireEvent(
    button,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(button).toHaveTextContent("Activated");
});
