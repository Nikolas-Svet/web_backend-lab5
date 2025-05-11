# Образовательный веб-проект

В этом репозитории находится мультисервисное веб-приложение на Node.js + Express + TypeScript с MongoDB, RabbitMQ и единым API‑Gateway на Nginx.

---

## 🧭 Ветки

* `main` — документация проекта. Не используется для разработки.
* `develop` — основная ветка разработки.
* `feature/*` — ветки для новых фич.
* `hotfix/*` — ветки для срочных исправлений.

---

## 🛠 Стек технологий

**Frontend**

* JavaScript, HTML, CSS

**Backend**

* Node.js, Express, TypeScript
* MongoDB (Mongoose)
* RabbitMQ (amqplib)
* Nginx как API‑Gateway

---

## 📁 Структура проекта

```
├── services/
│   ├── public-api-gateway/       # Nginx-конфигурация и Docker
│   ├── auth-service/             # Микросервис аутентификации
│   ├── user-service/             # Микросервис пользователей
│   ├── courses-service/          # Микросервис курсов
│   ├── lesson-service/           # Микросервис уроков
│   ├── comment-service/          # Микросервис комментариев
│   └── enrollment-service/       # Микросервис записи на курс
├── docker-compose.yml            # Сборка всех сервисов
└── .env                          # Переменные окружения (создаётся вручную)
```

---

## 🔧 Требования

* Docker & Docker Compose
* Node.js
* Yarn

---

## ⚙️ Настройка окружения

### 1. Создать файл `.env` в корне проекта

```ini
# Порты для всех микросервисов
PORT_USER=5001
PORT_AUTH=5002
PORT_COURSES=5003
PORT_LESSON=5006
PORT_COMMENT=5005
PORT_ENROLLMENT=5004
PORT_ENROLL=3003

# Подключение к MongoDB и RabbitMQ
MONGO_URI=mongodb://mongo:27017/lab1
RABBITMQ_URL=amqp://rabbitmq:5672

# Секрет для JWT
JWT_SECRET=your_jwt_secret

# Папка для загрузок (в user-service)
UPLOAD_DIR=uploads
```

> Файл `.env` должен лежать рядом с `docker-compose.yml` и содержать все перечисленные переменные.

### 2. Настроить Nginx (API Gateway)

В `services/public-api-gateway/nginx.conf` замените хардкод портов на соответствующие из `.env` (или оставьте статичные цифры):

```nginx
# Пример с подстановкой через envsubst (шаблон):
    upstream auth        { server auth-service:5002; }
    upstream user        { server user-service:5001; }
    upstream courses     { server courses-service:5003; }
    upstream lessons     { server lesson-service:5006; }
    upstream comments    { server comment-service:5005; }
    upstream enrollments { server enrollment-service:5004; }
```

---

## 🚀 Запуск всех сервисов

```bash
docker-compose up --build
```

