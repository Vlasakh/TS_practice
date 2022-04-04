// https://twitter.com/mpocock1/status/1501533441791193090

import React from 'react';

const FNComponent = (props: { enabled: boolean }) => {
  return null;
};

class ClassComponent extends React.Component<{ enabled2: boolean }> {}

type PropsFrom<TComponent> = TComponent extends React.FC<infer Props>
  ? Props
  : TComponent extends React.Component<infer ClassProps>
  ? ClassProps
  : never;

const props1: PropsFrom<typeof FNComponent> = { enabled: true };
const props2: PropsFrom<ClassComponent> = { enabled2: true };

export {};
