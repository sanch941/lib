interface Type<T = any> extends Function {
    new (...args: any[]): T;
}

interface MappedType<T> extends Type<T> {
    new (): T;
}

export declare function IntersectionType<A, B>(
    target: Type<A>,
    source: Type<B>
): MappedType<A & B>;
export declare function IntersectionType<A, B, C>(
    target: Type<A>,
    sourceB: Type<B>,
    sourceC: Type<C>
): MappedType<A & B & C>;
export declare function IntersectionType<A, B, C, D>(
    target: Type<A>,
    sourceB: Type<B>,
    sourceC: Type<C>,
    sourceD: Type<D>
): MappedType<A & B & C & D>;
