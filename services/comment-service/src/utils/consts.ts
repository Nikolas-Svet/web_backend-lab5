// src/utils/consts.ts

export const API_PREFIX = '/api/lab4/';

// Сообщения для фронта
export enum ErrorMessages {
    InternalServerError = 'Внутренняя ошибка сервера',
    NotFound = 'Ресурс не найден',
    // Курсы
    ValidationId = 'Некорректный ID курса',

    // Комментарии
    CommentNotValidText = 'Сообщение пустое',
    CommentNotValidLessonUser = 'Нету такого урока или пользователя',
    CommentNotValidID = 'Некорректный ID комментария',
    CommentDeleteSuccessful = 'Некорректный ID комментария',
}

