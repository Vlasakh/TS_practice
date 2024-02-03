type Action =
  | {
      type: "INIT"
    }
  | {
      type: "SYNC"
    }
  | {
      type: "LOG_IN"
      emailAddress: string
    }
  | {
      type: "LOG_IN_SUCCESS"
      accessToken: string
    }


type ExcludeTypeKey<K> = K extends "type" ? never : K
type ExcludeTypeField<A> = { [K in ExcludeTypeKey<keyof A>]: A[K] }

/**
 * don't works with all the types from Action union
 */
type ExtractSimpleAction1<A> = ExcludeTypeField<A> extends {} ? A : never
/**
 * works with all the types from Action union !!!
 *
 * That ‘distribution’, where the union is unrolled recursively, only happens when the thing on the left of the extends keyword is a plain type variable
 */
type ExtractSimpleAction<A> = A extends any
  ? {} extends ExcludeTypeField<A>
    ? A
    : never
  : never

type zz = ExtractSimpleAction<Action>
type zz1 = ExtractSimpleAction1<Action>

export {};
