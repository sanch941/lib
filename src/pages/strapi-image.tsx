import { StrapiImage } from '@lib/strapi-image';
import React from 'react';

export const StrapiImagePage = () => {
    return (
        <>
            <StrapiImage
                commonFilename="from_figma_dd2110eae5.png"
                widthOnScreen={{
                    mobile: 121,
                    common: 218
                }}
            />
        </>
    );
};
