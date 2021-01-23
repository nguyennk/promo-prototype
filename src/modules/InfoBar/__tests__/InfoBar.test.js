import { render, screen } from "@testing-library/react";
import InfoBar from "../";

test("renders InfoBar correctly with data", () => {
  const mockData = {
    balance: 1000,
    payout: 2000,
  };

  render(<InfoBar infoBarData={mockData} />);
  const balanceElement = screen.getByText(/Balance/i);
  const balanceAmount = screen.getByTestId(/balance_amount/i);
  expect(balanceElement).toBeInTheDocument();
  expect(balanceAmount).toHaveTextContent("1,000 $");

  const payoutElement = screen.getByText(/Payout/i);
  const payoutAmount = screen.getByTestId(/payout_amount/i);
  expect(payoutElement).toBeInTheDocument();
  expect(payoutAmount).toHaveTextContent("2,000 $");
});
