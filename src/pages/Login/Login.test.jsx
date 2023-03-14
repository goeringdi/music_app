import { setupApiStore } from '../../utils/reduxQueryTest-utils'
import { render, screen, fireEvent} from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { musicApi } from "../../api/musicApi";
import LoginButton from '../../components/LoginButton/LoginButton';

export const handlers = [
  rest.get('https://painassasin.online/user/login/', (_req, res, ctx) => {
    return res(
      ctx.json([{id: 281, username: 'melon', first_name: '', last_name: '', email: 'goering31@gmail.com'}])
    );
  }),
];

const server = setupServer(...handlers);

// eslint-disable-next-line no-unused-vars
const storeRef = setupApiStore(musicApi);

describe("LoginButton", () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it("should show requested data", async () => {
    render(<LoginButton />, { wrapper: storeRef.wrapper });
    const button = screen.getByText("Войти");
    fireEvent.click(button);
    // Проверяем начальное состояние компонента
    screen.getByText("Выполняем вход ...");

   
  });
});