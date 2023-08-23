/**
 * Utils includes
 * - a handful of functional utilities inspired by or taken from the [Ramda library](https://ramdajs.com/);
 * - TypeScript crutches - the [[tup]] function.
 *
 * Use these for your convenience - they are here so that urx is zero-dependency package.
 *
 * @packageDocumentation
 */
/** @internal */
export interface Proc {
    (): any;
}
/**
 * Performs left to right composition of two functions.
 */
export declare function compose<I, A, R>(a: (arg: A) => R, b: (arg: I) => A): (arg: I) => R;
/**
 * Takes a value and applies a function to it.
 */
export declare function thrush<I, K>(arg: I, proc: (arg: I) => K): K;
/**
 * Takes a 2 argument function and partially applies the first argument.
 */
export declare function curry2to1<T, K, R>(proc: (arg1: T, arg2: K) => R, arg1: T): (arg2: K) => R;
/**
 * Takes a 1 argument function and returns a function which when called, executes it with the provided argument.
 */
export declare function curry1to0<T, R>(proc: (arg: T) => R, arg: T): () => R;
/**
 * Returns a function which extracts the property from from the passed object.
 */
export declare function prop(property: string): (object: any) => any;
/**
 * Calls callback with the first argument, and returns it.
 */
export declare function tap<T>(arg: T, proc: (arg: T) => any): T;
/**
 *  Utility function to help typescript figure out that what we pass is a tuple and not a generic array.
 *  Taken from (this StackOverflow tread)[https://stackoverflow.com/questions/49729550/implicitly-create-a-tuple-in-typescript/52445008#52445008]
 */
export declare function tup<T extends Array<any>>(...args: T): T;
/**
 * Calls the passed function.
 */
export declare function call(proc: Proc): void;
/**
 * returns a function which when called always returns the passed value
 */
export declare function always<T>(value: T): () => T;
/**
 * returns a function which calls all passed functions in the passed order.
 * joinProc does not pass arguments or collect return values.
 */
export declare function joinProc(...procs: Proc[]): () => void;
export declare function noop(): void;
//# sourceMappingURL=utils.d.ts.map