// src/utils/consts.ts
export const API_PREFIX = '/api/lab4/';

// Сообщения для фронта
export enum ErrorMessages {
    InternalServerError = 'Внутренняя ошибка сервера',
    // Удаление пользователя
    delSuccessful = 'Пользователь удалён',
    // Получение данных о пользователе
    GetInfoNotAuth = 'Пользователь не авторизован',
    // Общее для пользователя
    NotFoundUser = 'Пользователь не найден',
}

