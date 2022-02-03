import { baseAxios } from './axios';

interface ErrorHandlerParams {
    err: any;
    onResponse?: () => void;
    onRequest?: () => void;
    onDefault?: () => void;
}

export const errorHandler = ({
    err,
    onResponse,
    onRequest,
    onDefault
}: ErrorHandlerParams) => {
    if (_DEV_) {
        console.log(err);
    }

    if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        onResponse && onResponse();
    } else if (err.request) {
        // The request was made but no response was received
        // `err.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        onRequest && onRequest();
    } else {
        onDefault && onDefault();

        // Something happened in setting up the request that triggered an Error
        const { name, message, stack } = err || {};
        // если просто отправлять без деструризации то в network браузера он его не отправляет
        // поэтому приходится отправлять вот так
        baseAxios.post('/log/frontend', {
            message: 'Ошибка платежной формы(Error handler)',
            err: {
                name,
                message,
                stack
            }
        });
    }
};
