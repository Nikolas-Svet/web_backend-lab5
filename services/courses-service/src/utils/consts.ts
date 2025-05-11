// src/utils/consts.ts

export const API_PREFIX = '/api/lab4/';

// Сообщения для фронта
export enum ErrorMessages {
    InternalServerError = 'Внутренняя ошибка сервера',
    // Получение данных о пользователе
    GetInfoNotAuth = 'Пользователь не авторизован',
    // Общее для пользователя
    NotFoundUser = 'Пользователь не найден',
    // Курсы
    NotFoundCourse = 'Курс не найден',
    ValidationId = 'Некорректный ID курса',
    CourseDelSuccessful = 'Курс успешно удалён',
    CourseNotFile = 'Требуется файл изображения',
}

