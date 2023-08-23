/**
 * urx Actions operate on streams - `publish` publishes data in a stream, and `subscribe` attaches a subscription to a stream.
 * @packageDocumentation
 */
import { PUBLISH, RESET, SUBSCRIBE, VALUE } from './constants';
/**
 * A Publisher is the **input end** of a Stream. The [[publish]] action publishes values in publishers.
 * @typeParam T the type of values to be published.
 */
export interface Publisher<T> {
    /** @internal */
    (action: PUBLISH, value: T): void;
}
/**
 * An Emitter is the **output end** of a Stream. The [[subscribe]] action binds {@link Subscription | subscriptions} to emitters.
 * @typeParam T the type of values that will be emitted.
 */
export interface Emitter<T> {
    /** @internal */
    (action: SUBSCRIBE, subscription: Subscription<T>): Unsubscribe;
    /** @internal */
    (action: RESET): void;
}
export interface Cell<T> {
    /** @internal */
    (action: VALUE): T;
}
/**
 * Subscriptions are bound to Emitters with the [[subscribe]] action, and get called with the new values.
 * @typeParam T the Emitter value type.
 */
export interface Subscription<T> {
    (value: T): any;
}
/**
 * Subscribe-like actions return unsubscribe handles of the Unsubscribe type, which, when called, unbind the subscription.
 */
export interface Unsubscribe {
    (): void;
}
export type StreamArgs<T> = [PUBLISH] | [SUBSCRIBE, Subscription<T>] | [RESET];
/**
 * Streams present both the input and the output ends of a stream.
 * A single stream instance can be both subscribed to and published in.
 */
export interface Stream<T> extends Publisher<T>, Emitter<T> {
    /** @internal */
    (action: SUBSCRIBE | PUBLISH | RESET): any;
}
/**
 * Just like {@link Stream | streams}, stateful streams present both input and output ends of a stream.
 * A single stream instance can be both subscribed to and published in.
 * Stateful Streams can also act like depots, preserving the last passed value and immediately publishing it to new subscriptions.
 * [[getValue]] can be used to extract value from stateful streams.
 */
export interface StatefulStream<T> extends Publisher<T>, Emitter<T> {
    /** @internal */
    (action: SUBSCRIBE | PUBLISH | RESET | VALUE): any;
}
/**
 * Subscribes the specified [[Subscription]] to the updates from the Emitter.
 * The emitter calls the subscription with the new data each time new data is published into it.
 *
 * ```ts
 * const foo = stream<number>();
 * subscribe(foo, (value) => console.log(value));
 * ```
 *
 * @returns an [[Unsubscribe]] handle  - calling it will unbind the subscription from the emitter.
 *```ts
 * const foo = stream<number>();
 * const unsub = subscribe(foo, (value) => console.log(value));
 * unsub();
 *```
 */
export declare function subscribe<T>(emitter: Emitter<T>, subscription: Subscription<T>): Unsubscribe;
/**
 * Publishes the value into the passed [[Publisher]].
 *
 * ```ts
 * const foo = stream<number>();
 * publish(foo, 42);
 * ```
 */
export declare function publish<T>(publisher: Publisher<T>, value: T): void;
/**
 * Clears all subscriptions from the [[Emitter]].
 * ```ts
 * const foo = stream<number>();
 * subscribe(foo, (value) => console.log(value));
 * reset(foo);
 * publish(foo, 42);
 * ```
 */
export declare function reset(emitter: Emitter<any>): void;
/**
 * Extracts the current value from a stateful stream. Use it only as an escape hatch, as it violates the concept of reactive programming.
 * ```ts
 * const foo = statefulStream(42);
 * console.log(getValue(foo));
 * ```
 */
export declare function getValue<T>(depot: StatefulStream<T>): T;
/**
 * Connects two streams - any value emitted from the emitter will be published in the publisher.
 * ```ts
 * const foo = stream<number>();
 * const bar = stream<number>();
 * subscribe(bar, (value) => console.log(`Bar emitted ${value}`));
 *
 * connect(foo, bar);
 * publish(foo);
 * ```
 * @returns an [[Unsubscribe]] handle which will disconnect the two streams.
 */
export declare function connect<T>(emitter: Emitter<T>, publisher: Publisher<any>): Unsubscribe;
/**
 * Executes the passed subscription at most once, for the next emit from the emitter.
 * ```ts
 * const foo = stream<number>()
 * handleNext(foo, value => console.log(value)) // called once, with 42
 * publish(foo, 42)
 * publish(foo, 43)
 * ```
 * @returns an [[Unsubscribe]] handle to unbind the subscription if necessary.
 */
export declare function handleNext<T>(emitter: Emitter<T>, subscription: Subscription<T>): Unsubscribe;
//# sourceMappingURL=actions.d.ts.map