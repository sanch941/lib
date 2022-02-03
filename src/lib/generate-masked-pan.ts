export const generateMaskedPan = (pan) => {
    const panAddSpaceBetween4Char = pan.match(/.{1,4}/g);
    const panFilterThirdElem = panAddSpaceBetween4Char.filter(
        (_, idx) => idx !== 2
    );

    const maskedPan = panFilterThirdElem
        .map((part, idx) => {
            if (idx === 1) {
                return `${part.slice(0, 2)}XXXXXX`;
            }

            return part;
        })
        .join('-');

    return maskedPan;
};
