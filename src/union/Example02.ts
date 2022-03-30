// https://twitter.com/mpocock1/status/1497262298368409605

const fruitCounts = {
  apple: 1,
  pear: 4,
  banana: 6,
};

// what do we want
type SingleFruitCount =
  | {
      apple: number;
    }
  | { pear: number }
  | { banana: number };

// universal variant
type NewSingleFruitCount = {
  [K in keyof typeof fruitCounts]: {
    [K2 in K]: number;
  };
}[keyof typeof fruitCounts];

const singleFruitCount: SingleFruitCount = {
  apple: 1,
  pear: 2,
};

const newSingleFruitCount: NewSingleFruitCount = {
  apple: 1,
};

export {};
