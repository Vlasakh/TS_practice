// https://twitter.com/mpocock1/status/1506660636683653130

type LooseIconSize = 'sm' | 'xs' | Omit<string, 'sm' | 'xs'>; // preserve autocomplete
type LooseIconSize2 = 'sm' | 'xs' | (string & {}); // works the same
type LooseIconSize3 = 'sm' | 'xs' | `xs${string}`;
type LooseIconSize4 = 'sm' | 'xs' | string; // works the same

const icon: LooseIconSize = 'anything';
const icon2: LooseIconSize2 = 'anything';
const icon3: LooseIconSize3 = 'xs something';
const icon4: LooseIconSize4 = 'anything';

export {};
