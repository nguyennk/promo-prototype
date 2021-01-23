import { render, screen } from "@testing-library/react";
import Sidebar from "../";

test("renders Sidebar with correct amount of menu item", () => {
  render(<Sidebar />);
  const items = screen.getAllByRole("listitem");
  expect(items).toHaveLength(8);
});
