import * as u from './urx';
import { GridItem } from './interfaces';
import { IndexLocation } from './scrollToIndexSystem';
export type Data = unknown[] | undefined;
export interface Gap {
    row: number;
    column: number;
}
export interface ElementDimensions {
    width: number;
    height: number;
}
export interface GridLayout {
    top: number;
    bottom: number;
}
export interface GridState extends GridLayout {
    items: GridItem<unknown>[];
    offsetTop: number;
    offsetBottom: number;
    itemHeight: number;
    itemWidth: number;
}
export declare const gridSystem: u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
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
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, u.SystemSpec<never[], () => {
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
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
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
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
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
    isScrolling: u.StatefulStream<boolean>;
    isAtTop: u.StatefulStream<boolean>;
    isAtBottom: u.StatefulStream<boolean>;
    atBottomState: u.Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: u.Stream<boolean>;
    atBottomStateChange: u.Stream<boolean>;
    scrollDirection: u.StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: u.StatefulStream<number>;
    atTopThreshold: u.StatefulStream<number>;
    scrollVelocity: u.StatefulStream<number>;
    lastJumpDueToItemResize: u.StatefulStream<number>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
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
}>], ([{ scrollContainerState, scrollTop, viewportHeight, headerHeight, footerHeight, scrollBy }]: [{
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
    isScrolling: u.StatefulStream<boolean>;
    isAtTop: u.StatefulStream<boolean>;
    isAtBottom: u.StatefulStream<boolean>;
    atBottomState: u.Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: u.Stream<boolean>;
    atBottomStateChange: u.Stream<boolean>;
    scrollDirection: u.StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: u.StatefulStream<number>;
    atTopThreshold: u.StatefulStream<number>;
    scrollVelocity: u.StatefulStream<number>;
    lastJumpDueToItemResize: u.StatefulStream<number>;
}>], ([{ scrollVelocity }]: [{
    isScrolling: u.StatefulStream<boolean>;
    isAtTop: u.StatefulStream<boolean>;
    isAtBottom: u.StatefulStream<boolean>;
    atBottomState: u.Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: u.Stream<boolean>;
    atBottomStateChange: u.Stream<boolean>;
    scrollDirection: u.StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: u.StatefulStream<number>;
    atTopThreshold: u.StatefulStream<number>;
    scrollVelocity: u.StatefulStream<number>;
    lastJumpDueToItemResize: u.StatefulStream<number>;
}]) => {
    isSeeking: u.StatefulStream<boolean>;
    scrollSeekConfiguration: u.StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: u.StatefulStream<number>;
    scrollSeekRangeChanged: u.Stream<import("./interfaces").ListRange>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
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
}>], ([{ scrollTo, scrollContainerState }]: [{
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
    useWindowScroll: u.StatefulStream<boolean>;
    useMyWindow: u.StatefulStream<Window | undefined>;
    customScrollParent: u.StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: u.Stream<import("./interfaces").ScrollContainerState>;
    windowViewportRect: u.Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: u.Stream<ScrollToOptions>;
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ overscan, visibleRange, listBoundary }, { scrollTop, viewportHeight, scrollBy, scrollTo, smoothScrollTargetReached, scrollContainerState, footerHeight, headerHeight }, stateFlags, scrollSeek, { propsReady, didMount }, { windowViewportRect, windowScrollTo, useWindowScroll, useMyWindow, customScrollParent, windowScrollContainerState }, log,]: [{
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
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
}, {
    isScrolling: u.StatefulStream<boolean>;
    isAtTop: u.StatefulStream<boolean>;
    isAtBottom: u.StatefulStream<boolean>;
    atBottomState: u.Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: u.Stream<boolean>;
    atBottomStateChange: u.Stream<boolean>;
    scrollDirection: u.StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: u.StatefulStream<number>;
    atTopThreshold: u.StatefulStream<number>;
    scrollVelocity: u.StatefulStream<number>;
    lastJumpDueToItemResize: u.StatefulStream<number>;
}, {
    isSeeking: u.StatefulStream<boolean>;
    scrollSeekConfiguration: u.StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: u.StatefulStream<number>;
    scrollSeekRangeChanged: u.Stream<import("./interfaces").ListRange>;
}, {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}, {
    useWindowScroll: u.StatefulStream<boolean>;
    useMyWindow: u.StatefulStream<Window | undefined>;
    customScrollParent: u.StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: u.Stream<import("./interfaces").ScrollContainerState>;
    windowViewportRect: u.Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: u.Stream<ScrollToOptions>;
}, {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
    startReached: u.Stream<number>;
    endReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    propsReady: u.StatefulStream<boolean>;
    isScrolling: u.StatefulStream<boolean>;
    isAtTop: u.StatefulStream<boolean>;
    isAtBottom: u.StatefulStream<boolean>;
    atBottomState: u.Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: u.Stream<boolean>;
    atBottomStateChange: u.Stream<boolean>;
    scrollDirection: u.StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: u.StatefulStream<number>;
    atTopThreshold: u.StatefulStream<number>;
    scrollVelocity: u.StatefulStream<number>;
    lastJumpDueToItemResize: u.StatefulStream<number>;
    gridState: u.StatefulStream<GridState>;
    totalListHeight: u.StatefulStream<number>;
    isSeeking: u.StatefulStream<boolean>;
    scrollSeekConfiguration: u.StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollSeekRangeChanged: u.Stream<import("./interfaces").ListRange>;
    data: u.StatefulStream<Data>;
    totalCount: u.StatefulStream<number>;
    viewportDimensions: u.StatefulStream<ElementDimensions>;
    itemDimensions: u.StatefulStream<ElementDimensions>;
    scrollTop: u.Stream<number>;
    scrollHeight: u.Stream<number>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    scrollBy: u.Stream<ScrollToOptions>;
    scrollTo: u.Stream<ScrollToOptions>;
    scrollToIndex: u.Stream<IndexLocation>;
    smoothScrollTargetReached: u.Stream<true>;
    windowViewportRect: u.Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: u.Stream<ScrollToOptions>;
    useWindowScroll: u.StatefulStream<boolean>;
    useMyWindow: u.StatefulStream<Window | undefined>;
    customScrollParent: u.StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: u.Stream<import("./interfaces").ScrollContainerState>;
    deviation: u.StatefulStream<number>;
    scrollContainerState: u.Stream<import("./interfaces").ScrollContainerState>;
    footerHeight: u.StatefulStream<number>;
    headerHeight: u.StatefulStream<number>;
    initialItemCount: u.StatefulStream<number>;
    gap: u.StatefulStream<Gap>;
}>;
//# sourceMappingURL=gridSystem.d.ts.map