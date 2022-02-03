import React, { FC, useContext, useEffect, useState } from 'react';
import {
    DetectDeviceContext,
    DetectDeviceContextParams
} from './create-context';

export const DetectDeviceProvider: FC = ({ children }) => {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    const params: DetectDeviceContextParams = {
        isMobile: width <= 768
    };

    return (
        <DetectDeviceContext.Provider value={params}>
            {children}
        </DetectDeviceContext.Provider>
    );
};

export const useDetectDevice = (): DetectDeviceContextParams => {
    const params = useContext(DetectDeviceContext) as DetectDeviceContextParams;
    return params;
};
