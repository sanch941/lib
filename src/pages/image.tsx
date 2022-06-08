import { Image } from '@lib';
import React from 'react';

export const ImagePage = () => {
    return (
        <Image
            commonWebpUrl={{
                '1x':
                    'https://cms.tarlanpayments.kz/uploads/w_300,fomat_webp/from_figma_dd2110eae5.png',
                '2x':
                    'https://cms.tarlanpayments.kz/uploads/format_webp/from_figma_dd2110eae5.png'
            }}
            commonUrl={{
                '1x':
                    'https://cms.tarlanpayments.kz/uploads/w_300/from_figma_dd2110eae5.png',
                '2x':
                    'https://cms.tarlanpayments.kz/uploads/from_figma_dd2110eae5.png'
            }}
        />
    );
};
