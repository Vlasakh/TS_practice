// https://twitter.com/mpocock1/status/1504802045794078723

type DeepPartial<Thing> = Thing extends Function
  ? Thing
  : Thing extends Array<infer InferredArrayMember>
  ? DeepPartialArray<InferredArrayMember>
  : Thing extends object
  ? DeepPartialObject<Thing>
  : Thing | undefined;

interface DeepPartialArray<Thing> extends Array<DeepPartial<Thing>> {}

type DeepPartialObject<Thing> = {
  [Key in keyof Thing]?: DeepPartial<Thing[Key]>;
};

interface Post {
  id: string;
  comments: { id: string }[];
  meta: {
    name: string;
    description: string;
  };
}

const post: DeepPartial<Post> = {
  id: '1',
  meta: {
    name: 'smth',
  },
};

export {};
