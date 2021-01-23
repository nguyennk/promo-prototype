import { render, screen, waitFor } from "@testing-library/react";
import fetchMock from "fetch-mock-jest";
import Services from "../";

fetchMock.get(`/api/fetch_promo_services`, [
  {
    id: "1",
    title: "mock_service_1",
    description: "Description",
    promo_code: "mock_promo",
    is_activated: true,
  },
  {
    id: "2",
    title: "mock_service_2",
    description: "Description",
    promo_code: "mock_promo",
    is_activated: false,
  },
]);

test("renders Services with correct data", async () => {
  render(<Services />);

  const heading = screen.getByRole("heading");
  expect(heading).toHaveTextContent("Services");

  const filterField = screen.getByRole("textbox");
  expect(filterField).toHaveAttribute("name", "filter_input");

  const resetButton = screen.getByRole("button");
  expect(resetButton).toHaveTextContent("Reset");

  expect(fetchMock).toHaveFetched(`/api/fetch_promo_services`);
  await waitFor(() => screen.getAllByTestId("service_item"));

  const serviceItems = screen.getAllByTestId("service_item");
  expect(serviceItems).toHaveLength(2);
});
