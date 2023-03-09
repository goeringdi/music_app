import  LoginButton  from "./LoginButton";
import { render } from "@testing-library/react";


describe("<LoginButton />", () => {
  it("should render successfully and match snapshot", () => {
    const { container } = render(<LoginButton >Войти</LoginButton >);

    expect(container).toMatchSnapshot();
  });
})