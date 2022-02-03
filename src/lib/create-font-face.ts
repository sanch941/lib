import { FlattenSimpleInterpolation, css } from 'styled-components';

interface CreateFontFaceParams {
    name: string;
    path: string;
    fontWeight?: number;
    fontStyle?: string;
    localFonts?: string;
}

export const createFontFace = ({
    name,
    path,
    fontWeight = 400,
    fontStyle = 'normal',
    localFonts
}: CreateFontFaceParams): FlattenSimpleInterpolation => {
    const localFontsStr = Boolean(localFonts) && `${localFonts},`;

    const urls = `
        ${formats.map(({ ext, format }, idx) => {
            // если это последний элемент массива то мы должны поставить точку запятую, иначе - запятую
            const lastChar = formats.length === idx + 1 ? ';' : ',';

            return `url('/fonts/${path}.${ext}') format('${format}')${lastChar}`;
        })}
    `;

    return css`
        @font-face {
            font-family: ${name};
            font-style: ${fontStyle};
            font-weight: ${fontWeight};
            src: ${localFontsStr} ${urls};
        }
    `;
};

type Formats = {
    // extension
    ext: string;
    format: string;
}[];

const formats: Formats = [
    {
        ext: 'woff2',
        format: 'woff2'
    },
    {
        ext: 'woff',
        format: 'woff'
    },
    {
        ext: 'ttf',
        format: 'truetype'
    }
];
