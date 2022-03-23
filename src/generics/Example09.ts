// https://twitter.com/mpocock1/status/1504088070869884929

const makeKeyRemover =
  <Key extends string>(keys: Key[]) =>
  <Obj>(obj: Obj): Omit<Obj, Key> => {
    return {} as any;
  };

const keyRemover = makeKeyRemover(['a', 'b']);

const newObject = keyRemover({ a: 1, b: 2, c: 3 });

export {};
