import { render, screen } from "@testing-library/react";
import UserCell from "./UserCell";

test("renders UserCell, should be user name + email", () => {
  render(<UserCell user={{ name: "Eran", email: "eran@g.com" }} />);
  expect(screen.getByText("Eran")).toBeInTheDocument();
  expect(screen.getByText("eran@g.com")).toBeInTheDocument();
});
