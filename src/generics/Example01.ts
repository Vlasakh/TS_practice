type GetFirstArgumentOfAnyFunction<T> = T extends (first: infer FirstArgument, ...args: any[]) => any
  ? FirstArgument
  : never;

type t = GetFirstArgumentOfAnyFunction<(name: string, age: number) => void>;

export {};
