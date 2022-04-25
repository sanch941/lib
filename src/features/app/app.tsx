import { hot } from 'react-hot-loader/root';
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '@store';
import { DetectDeviceProvider } from './detect-device';
import { Router } from './router';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './global-styles';

export const _App: FC = () => (
    <Provider store={store}>
        <GlobalStyles />

        <DetectDeviceProvider>
            <BrowserRouter basename="/payservice">
                <Router />
            </BrowserRouter>
        </DetectDeviceProvider>
    </Provider>
);

export const App = hot(() => <_App />);
