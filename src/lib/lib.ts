// Обработчик ошибок, в дев режиме выводит ошибку в консоль
import { format as dateFnsFormat } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { errorHandler } from './error-handler';
// на production отправляет запрос на запись ошибки в логи

// Часто бывает что ответ от сервера происходит быстрее чем появится лоадер,
// из за этого лоадер быстро появляется и исчезает что вызывает некрасивый эффект
// функция запускает лоадер если ответ от апи дольше миллисекунд которые вы укажете,
// по дефолту 250
export const smartLoading = async (
    toggleLoader: (bool?: boolean) => void,
    asyncCallback: () => Promise<any>,
    timeout = 250
): Promise<any> => {
    let apiData: any = null;
    try {
        const startLoader = setTimeout(() => {
            toggleLoader();
        }, timeout);
        const data = await asyncCallback();
        clearTimeout(startLoader);
        apiData = data;
    } catch (err) {
        errorHandler({ err });
    } finally {
        toggleLoader(false);
        return apiData;
    }
};

// Имитация component did mount в хуках

// Дебаг useeffect
export const debugUseEffect = (name: string) => {
    _DEV_ ? console.log(`Use effect which named ${name} renders`) : null;
};

// Получить имя статуса по его индексу
export const getPaymentStatusName = (value: number): string => {
    switch (value) {
        case 1:
            return 'Оплачен';
        case 6:
            return 'Ошибка';
        case 7:
            return 'Незавершен';
        case 2:
            return 'В ожидании';
        case 5:
            return 'Возврат';
        case 4:
            return 'Отмена';
        case 0:
            return 'Новый';
        case 3:
            return 'Авторизован';
        default:
            return '';
    }
};

export const encryptMaskedPan = (pan: string) => '**** ' + pan.substr(-4, 4);

export function uppercaseMonth(str: string) {
    return str.slice(0, 3) + str.charAt(3).toUpperCase() + str.slice(4);
}
export const format = (
    date: number | Date,
    formatStr: string,
    uppercase = false
): string => {
    const dateFormatted = dateFnsFormat(date, formatStr, {
        locale: ru
    });

    return uppercase ? uppercaseMonth(dateFormatted) : dateFormatted;
};

export function removeSpacesFromStr(str: string) {
    return str.replace(/\s/g, '');
}

export function pxToRem(px: number) {
    return `${px / 16}rem`;
}

export const baseUrl = _DEV_
    ? process.env.DEV_BASE_URL
        ? process.env.DEV_BASE_URL
        : '/tp-local-api'
    : process.env.API_URL;

export function getMetrics(compName, mode, actualTime, baseTime) {
    console.log(compName, mode, actualTime, baseTime);
}
export const device = {
    up: {
        xs: '(min-width: 375px)',
        sm: '(min-width: 768px)',
        md: '(min-width: 992px)',
        lg: '(min-width: 1200px)',
        xl: '(min-width: 1440px)'
    }
};

export function checkValueAndGetPx(value: number | string) {
    return value ? `${value}px` : 0;
}

export const getParamsFromQuery = () => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const payment_id = params.get('payment_id');
    const payment_hash = params.get('payment_hash');

    return { payment_id, payment_hash };
};

export function getQueryParams() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    return params;
}

export function isValExists(val: any) {
    return val !== '' && val;
}
