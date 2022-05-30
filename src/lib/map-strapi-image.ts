import { MappedStrapiImage, StrapiImageFromRes } from './types';

export const mapStrapiImage = (
    strapiImages: StrapiImageFromRes
): MappedStrapiImage => {
    const getMobileFilename = () => {
        if (strapiImages?.mobile?.data) {
            const { hash, ext } = strapiImages.mobile.data?.attributes || {};
            const filename = `${hash}${ext}`;
            return filename;
        }
    };

    const getCommonFilename = () => {
        if (strapiImages?.common?.data) {
            const { hash, ext } = strapiImages.common.data?.attributes || {};
            const filename = `${hash}${ext}`;
            return filename;
        }
    };

    return {
        mobileFilename: getMobileFilename(),
        commonFilename: getCommonFilename()
    };
};
