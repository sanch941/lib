import React, { FC } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { baseAxios } from '../lib/axios';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
};

const myErrorHandler = (error: Error, info: any) => {
    const { name, message, stack } = error;

    baseAxios.post('/log/frontend', {
        message: 'Ошибка платежной формы(Error boundary)',
        // если просто отправлять без деструризации то в network браузера он его не отправляет
        // поэтому приходится отправлять вот так
        error: {
            message,
            name,
            stack
        },
        info
    });
};

export const ErrorBoundary: FC = ({ children }) => {
    return (
        <ReactErrorBoundary
            FallbackComponent={ErrorFallback}
            onError={myErrorHandler}
        >
            {children}
        </ReactErrorBoundary>
    );
};
