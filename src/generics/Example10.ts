// https://twitter.com/mpocock1/status/1504802045794078723

type CheckForBadArgs<Arg> = Arg extends any[] ? 'Cannot compare two arrays using deepEqualCompare' : Arg;

const deepEqualCompare = <Arg>(a: CheckForBadArgs<Arg>, b: CheckForBadArgs<Arg>): boolean => {
  if (Array.isArray(a) || Array.isArray(b)) {
    throw new Error('Cannot compare two arrays using deepEqualCompare');
  }

  return a === b;
};

deepEqualCompare(1, 1);

deepEqualCompare([], ['a']);

export {};
