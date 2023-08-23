/**
 * `@virtuoso.dev/react-urx` exports the [[systemToComponent]] function.
 * It wraps urx systems in to UI **logic provider components**,
 * mapping the system input and output streams to the component input / output points.
 *
 * ### Simple System wrapped as React Component
 *
 * ```tsx
 * const sys = system(() => {
 *   const foo = statefulStream(42)
 *   return { foo }
 * })
 *
 * const { Component: MyComponent, useEmitterValue } = systemToComponent(sys, {
 *   required: { fooProp: 'foo' },
 * })
 *
 * const Child = () => {
 *   const foo = useEmitterValue('foo')
 *   return <div>{foo}</div>
 * }
 *
 * const App = () => {
 *   return <Comp fooProp={42}><Child /><Comp>
 * }
 * ```
 *
 * @packageDocumentation
 */
import React from 'react';
import * as u from '../urx';
import type { Emitter, Publisher, AnySystemSpec, SR, Stream } from '../urx';
/** @internal */
export type Observable<T> = Emitter<T> | Publisher<T>;
/**
 * Describes the mapping between the system streams and the component properties.
 * Each property uses the keys as the names of the properties and the values as the corresponding stream names.
 * @typeParam SS the type of the system.
 */
export interface SystemPropsMap<SS extends AnySystemSpec, K = keyof SR<SS>, D = {
    [key: string]: K;
}> {
    /**
     * Specifies the required component properties.
     */
    required?: D;
    /**
     * Specifies the optional component properties.
     */
    optional?: D;
    /**
     * Specifies the component methods, if any. Streams are converted to methods with a single argument.
     * When invoked, the method publishes the value of the argument to the specified stream.
     */
    methods?: D;
    /**
     * Specifies the component "event" properties, if any.
     * Event properties accept callback functions which get executed when the stream emits a new value.
     */
    events?: D;
}
/** @internal */
export type PropsFromPropMap<E extends AnySystemSpec, M extends SystemPropsMap<E>> = {
    [K in Extract<keyof M['required'], string>]: M['required'][K] extends string ? SR<E>[M['required'][K]] extends Observable<infer R> ? R : never : never;
} & {
    [K in Extract<keyof M['optional'], string>]?: M['optional'][K] extends string ? SR<E>[M['optional'][K]] extends Observable<infer R> ? R : never : never;
} & {
    [K in Extract<keyof M['events'], string>]?: M['events'][K] extends string ? SR<E>[M['events'][K]] extends Observable<infer R> ? (value: R) => void : never : never;
};
/** @internal */
export type MethodsFromPropMap<E extends AnySystemSpec, M extends SystemPropsMap<E>> = {
    [K in Extract<keyof M['methods'], string>]: M['methods'][K] extends string ? SR<E>[M['methods'][K]] extends Observable<infer R> ? (value: R) => void : never : never;
};
/**
 * Used to correctly specify type refs for system components
 *
 * ```tsx
 * const s = system(() => { return { a: statefulStream(0) } })
 * const { Component } = systemToComponent(s)
 *
 * const App = () => {
 *  const ref = useRef<RefHandle<typeof Component>>()
 *  return <Component ref={ref} />
 * }
 * ```
 *
 * @typeParam T the type of the component
 */
export type RefHandle<T> = T extends React.ForwardRefExoticComponent<React.RefAttributes<infer Handle>> ? Handle : never;
/**
 * Converts a system spec to React component by mapping the system streams to component properties, events and methods. Returns hooks for querying and modifying
 * the system streams from the component's child components.
 * @param systemSpec The return value from a [[system]] call.
 * @param map The streams to props / events / methods mapping Check [[SystemPropsMap]] for more details.
 * @param Root The optional React component to render. By default, the resulting component renders nothing, acting as a logical wrapper for its children.
 * @returns an object containing the following:
 *  - `Component`: the React component.
 *  - `useEmitterValue`: a hook that lets child components use values emitted from the specified output stream.
 *  - `useEmitter`: a hook that calls the provided callback whenever the specified stream emits a value.
 *  - `usePublisher`: a hook which lets child components publish values to the specified stream.
 *  <hr />
 */
export declare function systemToComponent<SS extends AnySystemSpec, M extends SystemPropsMap<SS>, S extends SR<SS>, R>(systemSpec: SS, map: M, Root?: R): {
    Component: React.ForwardRefExoticComponent<React.PropsWithoutRef<{ [K in Extract<keyof M["required"], string>]: M["required"][K] extends string ? ReturnType<SS["constructor"]>[M["required"][K]] extends Observable<infer R_1> ? R_1 : never : never; } & { [K_1 in Extract<keyof M["optional"], string>]?: (M["optional"][K_1] extends string ? ReturnType<SS["constructor"]>[M["optional"][K_1]] extends Observable<infer R_2> ? R_2 : never : never) | undefined; } & { [K_2 in Extract<keyof M["events"], string>]?: (M["events"][K_2] extends string ? ReturnType<SS["constructor"]>[M["events"][K_2]] extends Observable<infer R_3> ? (value: R_3) => void : never : never) | undefined; } & (R extends React.ComponentType<infer RP> ? RP : {
        children?: React.ReactNode;
    })> & React.RefAttributes<MethodsFromPropMap<SS, M>>>;
    usePublisher: <K_3 extends keyof S>(key: K_3) => (value: S[K_3] extends u.Stream<infer R_4> ? R_4 : never) => void;
    useEmitterValue: <K_4 extends keyof S, V = S[K_4] extends u.StatefulStream<infer R_5> ? R_5 : never>(key: K_4) => V;
    useEmitter: <K_5 extends keyof S, V_1 = S[K_5] extends u.Stream<infer R_6> ? R_6 : never>(key: K_5, callback: (value: V_1) => void) => void;
};
//# sourceMappingURL=index.d.ts.map