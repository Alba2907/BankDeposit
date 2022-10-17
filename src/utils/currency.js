// интел глобальный объем в браузере который позволяет локализировать значиения. выбираем намбер т к будем менять именно число(сумма по заявке)

const formatter = new Intl.NumberFormat('ru-RU', {currency: 'RUB', style: 'currency'})

// делаем этот файл для измненеия формата сумму и статуса(визуально меняем)
export function currency(value) {
    return formatter.format(value)

}