import { createGlobalStyle } from 'styled-components';
import gilroyLightWoff2 from '@assets/fonts/Gilroy/Gilroy-Light.woff2';
import gilroyLightWoff from '@assets/fonts/Gilroy/Gilroy-Light.woff';
import gilroyLightTtf from '@assets/fonts/Gilroy/Gilroy-Light.ttf';

import gilroyRegularWoff2 from '@assets/fonts/Gilroy/Gilroy-Regular.woff2';
import gilroyRegularWoff from '@assets/fonts/Gilroy/Gilroy-Regular.woff';
import gilroyRegularTtf from '@assets/fonts/Gilroy/Gilroy-Regular.ttf';

import gilroyMediumWoff2 from '@assets/fonts/Gilroy/Gilroy-Medium.woff2';
import gilroyMediumWoff from '@assets/fonts/Gilroy/Gilroy-Medium.woff';
import gilroyMediumTtf from '@assets/fonts/Gilroy/Gilroy-Medium.ttf';

import gilroySemiboldWoff2 from '@assets/fonts/Gilroy/Gilroy-Semibold.woff2';
import gilroySemiboldWoff from '@assets/fonts/Gilroy/Gilroy-Semibold.woff';
import gilroySemiboldTtf from '@assets/fonts/Gilroy/Gilroy-Semibold.ttf';

import gilroyBoldWoff2 from '@assets/fonts/Gilroy/Gilroy-Bold.woff2';
import gilroyBoldWoff from '@assets/fonts/Gilroy/Gilroy-Bold.woff';
import gilroyBoldTtf from '@assets/fonts/Gilroy/Gilroy-Bold.ttf';

export const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'Gilroy';
        font-weight: 300;
        src: local('Gilroy Light'), local('Gilroy-Light'),
            url(${gilroyLightWoff2}) format('woff2'), /* Super Modern Browsers */
            url(${gilroyLightWoff}) format('woff'), /* Modern Browsers */
            url(${gilroyLightTtf}) format('truetype'); /* Safari, Android, iOS */
    }

    @font-face {
        font-family: 'Gilroy';
        font-weight: 400;
        src: local('Gilroy Regular'), local('Gilroy-Regular'),
            url(${gilroyRegularWoff2}) format('woff2'), /* Super Modern Browsers */
            url(${gilroyRegularWoff}) format('woff'), /* Modern Browsers */
            url(${gilroyRegularTtf}) format('truetype'); /* Safari, Android, iOS */
    }

    @font-face {
        font-family: 'Gilroy';
        font-weight: 500;
        src: local('Gilroy Medium'), local('Gilroy-Medium'),
            url(${gilroyMediumWoff2}) format('woff2'), /* Super Modern Browsers */
            url(${gilroyMediumWoff}) format('woff'), /* Modern Browsers */
            url(${gilroyMediumTtf}) format('truetype'); /* Safari, Android, iOS */
    }

    @font-face {
        font-family: 'Gilroy';
        font-weight: 600;
        src: local('Gilroy Semibold'), local('Gilroy-Semibold'),
            url(${gilroySemiboldWoff2}) format('woff2'), /* Super Modern Browsers */
            url(${gilroySemiboldWoff}) format('woff'), /* Modern Browsers */
            url(${gilroySemiboldTtf}) format('truetype'); /* Safari, Android, iOS */
    }

    @font-face {
        font-family: 'Gilroy';
        font-weight: 700;
        src: local('Gilroy Bold'), local('Gilroy-Bold'),
            url(${gilroyBoldWoff2}) format('woff2'), /* Super Modern Browsers */
            url(${gilroyBoldWoff}) format('woff'), /* Modern Browsers */
            url(${gilroyBoldTtf}) format('truetype'); /* Safari, Android, iOS */
    }
`;
