// https://twitter.com/mpocock1/status/1503750455825997833

type Animal<Noise> = {
  type: 'animal';
  noise: Noise;
};

type Cat = Animal<'meow'>;
type Dog = Animal<'woof'>;

type AnimalNoise<TAnimal extends Animal<any>> = TAnimal extends Animal<infer Noise> ? Noise : never;

type CatNoise = AnimalNoise<Cat>;

export {};
