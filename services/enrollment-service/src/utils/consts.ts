// src/utils/consts.ts
import {createEnrollment} from "../controllers/enrollment.controller";

export const API_PREFIX = '/api/lab4/';

// Сообщения для фронта
export enum ErrorMessages {
    InternalServerError = 'Внутренняя ошибка сервера',
    NotFound = 'Ресурс не найден',
    // Запись на курс
    EnrollmentAlreadyEnrolled = 'Вы уже записаны на курс',
    EnrollmentUnenrolledSuccessfully = 'Запись на курс отменена',
}

