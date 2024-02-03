/**
 * Use what you’ve learned so far to make it an error to supply a second argument for ‘simple’ actions.
 */

import { Action, ActionType, ExcludeTypeField, ExtractSimpleAction } from './DistributiveConditionalTypes03';

type ExtractActionParameters<A, T> = A extends { type: T }
  ? {} extends Omit<A, 'type'>
    ? never
    : Omit<A, 'type'>
  : never; // the same

type SimpleActionType = ExtractSimpleAction<Action>['type'];

declare function dispatch<T extends SimpleActionType>(type: T): void;
declare function dispatch<T extends ActionType>(type: T, args: ExtractActionParameters<Action, T>): void;

// first argument is the 'type'
// second is any extra parameters
dispatch('LOG_IN_SUCCESS', {
  accessToken: '038fh239h923908h',
});
dispatch('LOG_IN'); // 2nd param required
dispatch('INIT');
dispatch('SYNC', {}); // 2nd param is restricted

export {};
