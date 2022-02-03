import React from 'react';
import { Normalize } from './normalize';
import { Fonts } from './fonts';
import { Common } from './common';

export const GlobalStyles = () => {
    return (
        <>
            <Fonts />
            <Normalize />
            <Common />
        </>
    );
};
