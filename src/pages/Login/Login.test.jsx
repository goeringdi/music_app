import { setupApiStore } from '../../utils/reduxQueryTest-utils'
import {  screen, fireEvent} from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { musicApi } from "../../api/musicApi";

// Описываем endpoint-ы, которые хотим замокировать
export const handlers = [
  rest.get('https://painassasin.online/user/login/', (_req, res, ctx) => {
    return res(
      ctx.json([{id: 281, username: 'melon', first_name: '', last_name: '', email: 'goering31@gmail.com'}])
    );
  }),
];

// Готовим моковый сервер
const server = setupServer(...handlers);

// Мокируем api store
// eslint-disable-next-line no-unused-vars
const storeRef = setupApiStore(musicApi);

describe("TodoList feature", () => {
  // Поднимаем тестовый сервер перед запуском тестов
  beforeAll(() => server.listen());

  // Чистим обработчики между тестами
  afterEach(() => server.resetHandlers());

  // Отрубаем сервер после выполнения тестов.
  // НЕ ЗАБЫВАЙТЕ ЭТО ДЕЛАТЬ, иначе сервер будет работать вхолостую
  afterAll(() => server.close());

  it("should show requested data", async () => {
    // render(<Tracks />, { wrapper: storeRef.wrapper });
    const button = screen.getByText("Войти");
    fireEvent.click(button);
    // Проверяем начальное состояние компонента
    screen.getByText("Выполняем вход ...");

    // Ждем ответа от сервера. Как только он придет,
    // отрисуется пункт списка
    // expect(await screen.findByText(/my first todo/i)).toBeInTheDocument();
    // expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  });
});