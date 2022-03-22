// https://twitter.com/mpocock1/status/1502264005251018754
const myObj = {
  a: '1',
  b: '2',
  c: '3',
};

type t1 = keyof typeof myObj;

Object.keys(myObj).forEach((key) => {
  console.log('myObj[key]', myObj[key as t1]);
});

Object.entries(myObj).forEach(([_, key]) => {
  console.log('myObj[key]', myObj[key as t1]);
});

export {};
