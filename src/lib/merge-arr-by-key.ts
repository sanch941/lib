export const mergeArrByKey = (
    a1: any[],
    a2: any[],
    selector1: string,
    selector2?: string
) =>
    a1.map((t1) => ({
        ...t1,
        ...a2.find((t2) => t1[selector1] === t2[selector2 || selector1])
    }));
