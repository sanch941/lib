import { createContext, FC } from 'react';

interface Params {
    isMobile?: boolean;
}

export type DetectDeviceContextParams = Params;

export const DetectDeviceContext = createContext<Params>(null);
