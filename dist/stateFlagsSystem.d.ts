import * as u from './urx';
export declare const UP: "up";
export declare const DOWN: "down";
export declare const NONE: "none";
export type ScrollDirection = typeof UP | typeof DOWN | typeof NONE;
export interface ListBottomInfo {
    bottom: number;
    offsetBottom: number;
}
export interface AtBottomParams {
    offsetBottom: number;
    scrollTop: number;
    viewportHeight: number;
    scrollHeight: number;
}
export type NotAtBottomReason = 'SIZE_INCREASED' | 'NOT_SHOWING_LAST_ITEM' | 'VIEWPORT_HEIGHT_DECREASING' | 'SCROLLING_UPWARDS' | 'NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM';
export type AtBottomReason = 'SIZE_DECREASED' | 'SCROLLED_DOWN';
export type AtBottomState = {
    atBottom: false;
    notAtBottomBecause: NotAtBottomReason;
    state: AtBottomParams;
} | {
    atBottom: true;
    state: AtBottomParams;
    atBottomBecause: AtBottomReason;
    scrollTopDelta: number;
};
export declare const stateFlagsSystem: u.SystemSpec<[u.SystemSpec<never[], () => {
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
    atBottomState: u.Stream<AtBottomState>;
    atTopStateChange: u.Stream<boolean>;
    atBottomStateChange: u.Stream<boolean>;
    scrollDirection: u.StatefulStream<ScrollDirection>;
    atBottomThreshold: u.StatefulStream<number>;
    atTopThreshold: u.StatefulStream<number>;
    scrollVelocity: u.StatefulStream<number>;
    lastJumpDueToItemResize: u.StatefulStream<number>;
}>;
//# sourceMappingURL=stateFlagsSystem.d.ts.map