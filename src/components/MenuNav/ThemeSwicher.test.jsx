import React from "react";
import { screen, fireEvent } from "@testing-library/react";

import { customRender } from "../../utils/test-utils";

import { ChangeThemeTrack } from "../../context/switcher";

describe("<ThemeSwitcher />", () => {
  it("should change theme by click", () => {
    customRender(<ChangeThemeTrack />)

    const button = screen.getByTestId("theme");

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      color: "#fff",
      background: "#181818",
    });

    fireEvent.click(button);

    expect(button).toHaveStyle({
      color: "#000000",
      background: "#181818",
    });
  });
});