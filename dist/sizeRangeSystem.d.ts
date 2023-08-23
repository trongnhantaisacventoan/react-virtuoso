import * as u from './urx';
import { UP, DOWN, ScrollDirection } from './stateFlagsSystem';
export type NumberTuple = [number, number];
export type Overscan = number | {
    main: number;
    reverse: number;
};
export declare const TOP: "top";
export declare const BOTTOM: "bottom";
export declare const NONE: "none";
export type ListEnd = typeof TOP | typeof BOTTOM;
export type ViewportIncrease = number | {
    [k in ListEnd]?: number;
};
export type ChangeDirection = typeof UP | typeof DOWN | typeof NONE;
export declare function getOverscan(overscan: Overscan, end: ListEnd, direction: ScrollDirection): number;
export declare const sizeRangeSystem: u.SystemSpec<[u.SystemSpec<never[], () => {
    scrollContainerState: u.Stream<import("./interfaces").ScrollContainerState>;
    scrollTop: u.Stream<number>;
    viewportHeight: u.Stream<number>;
    headerHeight: u.StatefulStream<number>;
    fixedHeaderHeight: u.StatefulStream<number>;
    fixedFooterHeight: u.StatefulStream<number>;
    footerHeight: u.StatefulStream<number>;
    scrollHeight: u.Stream<number>;
    smoothScrollTargetReached: u.Stream<true>;
    scrollTo: u.Stream<ScrollToOptions>;
    scrollBy: u.Stream<ScrollToOptions>;
    statefulScrollTop: u.StatefulStream<number>;
    deviation: u.StatefulStream<number>;
    scrollingInProgress: u.StatefulStream<boolean>;
}>], ([{ scrollTop, viewportHeight, deviation, headerHeight, fixedHeaderHeight }]: [{
    scrollContainerState: u.Stream<import("./interfaces").ScrollContainerState>;
    scrollTop: u.Stream<number>;
    viewportHeight: u.Stream<number>;
    headerHeight: u.StatefulStream<number>;
    fixedHeaderHeight: u.StatefulStream<number>;
    fixedFooterHeight: u.StatefulStream<number>;
    footerHeight: u.StatefulStream<number>;
    scrollHeight: u.Stream<number>;
    smoothScrollTargetReached: u.Stream<true>;
    scrollTo: u.Stream<ScrollToOptions>;
    scrollBy: u.Stream<ScrollToOptions>;
    statefulScrollTop: u.StatefulStream<number>;
    deviation: u.StatefulStream<number>;
    scrollingInProgress: u.StatefulStream<boolean>;
}]) => {
    listBoundary: u.Stream<NumberTuple>;
    overscan: u.StatefulStream<Overscan>;
    topListHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<ViewportIncrease>;
    visibleRange: u.StatefulStream<NumberTuple>;
}>;
//# sourceMappingURL=sizeRangeSystem.d.ts.map