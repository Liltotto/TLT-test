# Руководство по выполнению тестового задания

## О тестовом задании

Тестовое задание предполагает два варианта исполнения: на React или на Next.js. **Использование Next будет преимуществом.** Серверная сторона уже реализована на json-server. [Ссылка на дизайн](https://www.figma.com/design/54wzMrgv4o8UHjCHmwvduJ/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5?node-id=537-2&t=R8hzhBZFigV0nqZX-0)

При оценке будут учитываться следующие критерии:

-   Качество и оформление кода
-   Качество верстки
-   Грамотная деструктуризация
-   Обработка ошибок

Рекомендуемый стек (обязательные элементы отмечены \*):

-   TypeScript (TS)\*
-   Tailwind CSS\*
-   React или Next.js
-   Zustand
-   SWR
-   Zod и/или React Hook Form

Результаты тестового задания разместите на GitHub. Вместе с ссылкой на репозиторий укажите время, затраченное на выполнение задания.

## Инициализация

1. В корне проекта выполните команду `npm run init`.
2. Для запуска проекта на React выполните команду `npm run react`, а для запуска проекта на Next.js выполните команду `npm run next`.

## Путь решения тестового задания

1. Страница авторизации и сайдбар уже сверстаны. Необходимо подключить страницу авторизации и реализовать хранение токена, который потребуется для других запросов. Реализация системы ролей является необязательной, но будет рассматриваться **как бонус при оценке**.Необходимо ограничить доступ к недоступным страницам (например, у пользователя нет доступа к странице /algorithms)

    Список пользователей:

```
{
	"id": 1,
    "email": "admin@example.com",
    "password": "admin123",
    "roles": [
      1,
      2
    ]
},
{
    "id": 2,
    "email": "user@example.com",
    "password": "user123",
    "roles": [
      2
    ]
}
```

2. Необходимо сверстать и подключить страницу "Товары". Вывод товаров должен быть представлен в двух вариантах: табличном и карточном. Один вариант необходимо сверстать с использованием flex, а другой — с использованием grid. Страница должна быть полностью функциональной, включая пагинацию, поиск, CRUD-операции и другие необходимые функции.
3. (Необязательно) Сверстать и подключить страницу "Алгоритм". При клике должна загружаться новая конечная точка. Необходимо корректно отобразить "хлебные крошки" (breadcrumbs) от родительского узла до самой конечной точки.

## Описание Backend

### Авторизация

#### POST /login

Ожидаемые поля:

```
{
	"email": "user@example.com",
	"password": "user123",
}
```

#### GET /me

Возвращает данные о пользователе. Ожидает в headers наличие поля authorization с токеном в формате "Token ${token}".

### Производитель

#### GET /manufacturers

Возвращает список производителей. Ожидает в headers наличие поля authorization с токеном в формате "Token ${token}".

### Товар

**Все запросы ожидают в headers наличие поля authorization с токеном в формате "Token ${token}".**

#### GET /products

Вывод товаров с пагинацией и поиском. Пример запроса:

```
products?_limit=10&_page=2&q=Стол

_limit - Количество товаров на странице
_page - Номер страницы
q - Значение поиска товара по имени
```

#### GET /products/[id]

Получить 1 товар по его id

#### POST /products

Создать 1 товар. Ожидаемые поля:

```
{
    name: "Test",
    quantity: 10,
    price: "10.00",
    image: [Файл изображения],
    manufacturerId: 2,
}
```

#### PATCH /products/[id]

Обновить товар по его id. Ожидаемые поля:

```
{
    name: "Test",
    quantity: 10,
    price: "10.00",
    image: [Файл изображения],
    manufacturerId: 2,
}
```

#### DELETE /products/[id]

Удалить товар по его id.

### Алгоритм

#### GET /breadcrumbs

Возвращает список узлов. Ожидает в headers наличие поля authorization с токеном в формате "Token ${token}".

#### GET /random_breadcrumb

Возвращает один случайный узел Ожидает в headers наличие поля authorization с токеном в формате "Token ${token}".
#   T L T - t e s t  
 