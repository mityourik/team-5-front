import { nanoid } from "nanoid";

export const headerListAmbs = [
  { value: "ФИО", id: nanoid() },
  { value: "Программа обучения", id: nanoid() },
  { value: "Статус", id: nanoid() },
  { value: "Промокод", id: nanoid() },
  { value: "Телеграмм", id: nanoid() },
  { value: "Дата добавления", id: nanoid() },
];

export const settings = [
  { value: "Электронная почта", id: nanoid() },
  { value: "Номер телефона", id: nanoid() },
  { value: "Способ связи", id: nanoid() },
  { value: "Страна", id: nanoid() },
  { value: "Город", id: nanoid() },
  { value: "Образование", id: nanoid() },
  { value: "Место работы и должность", id: nanoid() },
  { value: "Цель обучения", id: nanoid() },
  { value: "Что хочет делать?", id: nanoid() },
  { value: "Ссылки на блог", id: nanoid() },
  { value: "Размер одежды", id: nanoid() },
  { value: "Размер ноги", id: nanoid() },
  { value: "Дата добавления", id: nanoid() },
];

export default {
  headerListAmbs,
  settings,
};
