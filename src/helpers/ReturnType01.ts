type ReturnTypeManual<T> = T extends (...args: any[]) => infer R ? R : any;

type a1 = ReturnType<() => void>; // void
type b1 = ReturnType<() => string | number>; // string | number
type c1 = ReturnType<() => any>; // any

type a2 = ReturnTypeManual<() => void>; // void
type b2 = ReturnTypeManual<() => string | number>; // string | number
type c2 = ReturnTypeManual<() => any>; // any

export {};
