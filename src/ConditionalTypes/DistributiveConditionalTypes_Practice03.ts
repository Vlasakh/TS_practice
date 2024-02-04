import { Action, ActionType } from './DistributiveConditionalTypes01';

type ExcludeTypeField<A> = { [K in Exclude<keyof A, 'type'>]: A[K] };
type ExtractActionParameters1<A, T> = A extends { type: T } ? ExcludeTypeField<A> : never;
type ExtractActionParameters<A, T> = A extends { type: T } ? Omit<A, 'type'> : never; // the same

declare function dispatch<T extends ActionType>(type: T, args?: ExtractActionParameters<Action, T>): void;

// first argument is the 'type'
// second is any extra parameters
dispatch('LOG_IN_SUCCESS', {
  accessToken: '038fh239h923908h',
});
dispatch('LOG_IN'); // 2nd param required
dispatch('INIT');
dispatch('SYNC', {}); // 2nd param restricted

export {};
