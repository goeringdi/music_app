import { SignupButton } from "./SignupButton";
import {  render } from "@testing-library/react";



describe("<Button />", () => {
  it("should render successfully and match snapshot", () => {
    const { container } = render(<SignupButton>Зарегистрироваться</SignupButton >);

    expect(container).toMatchSnapshot();
  });
});

