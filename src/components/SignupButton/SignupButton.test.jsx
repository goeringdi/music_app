import { SignupButton } from "./SignupButton";
import { screen, render } from "@testing-library/react";


describe("<Button />", () => {
  describe("Snapshots tests", () => {
  it("should render successfully and match snapshot", () => {
    const { container } = render(<SignupButton>Зарегистрироваться</SignupButton >);

    expect(container).toMatchSnapshot();
  });
  })

  describe("Attributes tests", () => {
    it('should set type="button" by default', () => {
      render(<SignupButton />);

      expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    });
  });
})