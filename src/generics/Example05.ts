// https://twitter.com/mpocock1/status/1500813765973053440

const getDeepValue = <Obj, FirstKey extends keyof Obj, SecondKey extends keyof Obj[FirstKey]>(
  obj: Obj,
  firstKey: FirstKey,
  secondKey: SecondKey
): Obj[FirstKey][SecondKey] => {
  return {} as any;
};

const obj = {
  foo: {
    a: true,
    b: 2,
  },
  bar: {
    c: 'str',
    d: 3,
  },
};

const result = getDeepValue(obj, 'bar', 'd'); // number
const result2 = getDeepValue(obj, 'foo', 'a'); // boolean

export {};
