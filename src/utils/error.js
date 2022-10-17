
// тут мы задаем сообщения для тех ошибок, которые выдает консоль
const ERROR_CODES = {
    EMAIL_NOT_FOUND: 'Такого пользователя не существует',
    INVALID_PASSWORD: 'Неверный пароль',
    auth: 'Пожалуйста, войдите в систему'
}

export function error(code) {
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
}