import { hot } from 'react-hot-loader/root';
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '@store';
import { DetectDeviceProvider } from './detect-device';
import { Router } from './router';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '@features/error-boundary';
import { GlobalStyles } from './global-styles';

export const _App: FC = () => (
    <ErrorBoundary>
        <Provider store={store}>
            <GlobalStyles />

            <DetectDeviceProvider>
                <BrowserRouter basename="/payservice">
                    <Router />
                </BrowserRouter>
            </DetectDeviceProvider>
        </Provider>
    </ErrorBoundary>
);

export const App = hot(() => <_App />);
