import { pxRem } from './px-rem';

export const getDimension = (unit: number | string) =>
    typeof unit === 'number' ? pxRem(unit) : unit;
