import { StrapiImage } from '@lib/strapi-image';
import React from 'react';

export const ImagePage = () => {
    return (
        <>
            <StrapiImage
                desktopFilename="from_figma_dd2110eae5.png"
                widthOnScreen={{
                    mobile: 121,
                    desktop: 218
                }}
            />
        </>
    );
};
