export const mergeArrByKey = (a1: any[], a2: any[], selector: string) =>
    a1.map((t1) => ({
        ...t1,
        ...a2.find((t2) => t2[selector] === t1[selector])
    }));
