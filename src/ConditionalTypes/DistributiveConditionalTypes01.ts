export type Action =
  | {
      type: 'INIT';
    }
  | {
      type: 'SYNC';
    }
  | {
      type: 'LOG_IN';
      emailAddress: string;
    }
  | {
      type: 'LOG_IN_SUCCESS';
      accessToken: string;
    };

export type ActionType = Action['type'];

type ExcludeTypeKey<K> = K extends 'type' ? never : K;
export type ExcludeTypeField<A> = { [K in ExcludeTypeKey<keyof A>]: A[K] };

/**
 * doesn't work with all the types from Action union
 * see next implementation that fixes it
 */
type ExtractSimpleAction1<A> = ExcludeTypeField<A> extends {} ? A : never;

/**
 * works with all the types from Action union !!!
 *
 * That ‘distribution’, where the union is unrolled recursively, only happens when the thing on the left of the extends keyword is a plain type variable
 */
export type ExtractSimpleAction<A> = A extends any ? ({} extends ExcludeTypeField<A> ? A : never) : never;
type SimpleActionType = ExtractSimpleAction<Action>['type'];

type ExtractActionParameters1<A, T> = A extends { type: T } ? ExcludeTypeField<A> : never;
type ExtractActionParameters<A, T> = A extends { type: T } ? Omit<A, 'type'> : never; // the same

declare function dispatch<T extends SimpleActionType>(type: T): void;
declare function dispatch<T extends ActionType>(type: T, args: ExtractActionParameters<Action, T>): void;

// first argument is the 'type'
// second is any extra parameters
dispatch('LOG_IN_SUCCESS', {
  accessToken: '038fh239h923908h',
});
dispatch('LOG_IN'); // 2nd param required
dispatch('INIT');
dispatch('SYNC', {}); // 2nd param should be restricted, but it is not :)
