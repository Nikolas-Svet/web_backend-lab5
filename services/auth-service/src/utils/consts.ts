// src/utils/consts.ts

export const API_PREFIX = '/api/lab4/';

// Сообщения для фронта
export enum ErrorMessages {
    InternalServerError = 'Внутренняя ошибка сервера',
    // Авторизация
    Auth = 'Неверный логин или пароль',
    AuthValidation = 'Логин и пароль обязательны',
    // Регистрация
    RegSuccessful = 'Пользователь зарегистрирован',
    RegValidationNickname = 'Пользователь с таким логином уже существует',
    RegValidationRole = 'Роль должна быть student или teacher',
    RegValidationAll = 'Все поля обязательны',
}

