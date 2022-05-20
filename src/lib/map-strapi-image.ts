import { MappedStrapiImage, StrapiImage } from './types';

export const mapStrapiImage = (
    strapiImages: StrapiImage
): MappedStrapiImage => {
    const getMobileFilename = () => {
        if (strapiImages?.mobile?.data) {
            const { hash, ext } = strapiImages.mobile.data?.attributes || {};
            const filename = `${hash}${ext}`;
            return filename;
        }
    };

    const getDesktopFilename = () => {
        if (strapiImages?.desktop?.data) {
            const { hash, ext } = strapiImages.desktop.data?.attributes || {};
            const filename = `${hash}${ext}`;
            return filename;
        }
    };

    return {
        mobileFilename: getMobileFilename(),
        desktopFilename: getDesktopFilename()
    };
};
