export {};

type ArrayType<T> = T extends (infer Item)[] ? Item : T;

const arr1 = ['zzz', 111];

type t2 = ArrayType<typeof arr1>; // string | number
