import * as u from './urx';
import React from 'react';
import { Components, ComputeItemKey, GroupContent, GroupItemContent, ItemContent, ListRootProps } from './interfaces';
import { ScrollerProps } from '.';
import { GroupedVirtuosoHandle, GroupedVirtuosoProps, VirtuosoHandle, VirtuosoProps } from './component-interfaces/Virtuoso';
export declare function identity<T>(value: T): T;
export declare const scrollerStyle: React.CSSProperties;
export declare const viewportStyle: React.CSSProperties;
export declare function contextPropIfNotDomElement(element: unknown, context: unknown): {
    context: unknown;
} | undefined;
interface Hooks {
    usePublisher: typeof usePublisher;
    useEmitterValue: typeof useEmitterValue;
    useEmitter: typeof useEmitter;
}
export declare function buildScroller({ usePublisher, useEmitter, useEmitterValue }: Hooks): React.FunctionComponent<ScrollerProps>;
export declare function buildWindowScroller({ usePublisher, useEmitter, useEmitterValue }: Hooks): React.FunctionComponent<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
}, "style" | "children" | "ref" | "tabIndex"> & {
    'data-test-id'?: string | undefined;
    'data-virtuoso-scroller'?: boolean | undefined;
} & {
    context?: unknown;
}>;
export declare const List: React.ForwardRefExoticComponent<{} & {
    data?: import("./sizeSystem").Data;
    logLevel?: import("./loggerSystem").LogLevel | undefined;
    totalCount?: number | undefined;
    firstItemIndex?: number | undefined;
    itemSize?: import("./interfaces").SizeFunction | undefined;
    atBottomThreshold?: number | undefined;
    atTopThreshold?: number | undefined;
    initialTopMostItemIndex?: number | import("./interfaces").FlatIndexLocationWithAlign | undefined;
    followOutput?: import("./interfaces").FollowOutput | undefined;
    groupCounts?: number[] | undefined;
    overscan?: import("./sizeRangeSystem").Overscan | undefined;
    increaseViewportBy?: import("./sizeRangeSystem").ViewportIncrease | undefined;
    initialItemCount?: number | undefined;
    scrollSeekConfiguration?: false | import("./interfaces").ScrollSeekConfiguration | undefined;
    topItemCount?: number | undefined;
    initialScrollTop?: number | undefined;
    alignToBottom?: boolean | undefined;
    useWindowScroll?: boolean | undefined;
    customScrollParent?: HTMLElement | undefined;
    fixedItemHeight?: number | undefined;
    defaultItemHeight?: number | undefined;
    context?: unknown;
    itemContent?: ItemContent<any, any> | GroupItemContent<any, any> | undefined;
    components?: Components<any, unknown> | undefined;
    computeItemKey?: ComputeItemKey<any, any> | undefined;
    scrollerRef?: ((ref: HTMLElement | Window | null) => void) | undefined;
    headerFooterTag?: string | undefined;
    groupContent?: GroupContent<any> | undefined;
} & {
    groupIndices?: ((value: number[]) => void) | undefined;
    isScrolling?: ((value: boolean) => void) | undefined;
    atTopStateChange?: ((value: boolean) => void) | undefined;
    atBottomStateChange?: ((value: boolean) => void) | undefined;
    endReached?: ((value: number) => void) | undefined;
    startReached?: ((value: number) => void) | undefined;
    rangeChanged?: ((value: import("./interfaces").ListRange) => void) | undefined;
    itemsRendered?: ((value: import("./listStateSystem").ListItems) => void) | undefined;
    totalListHeightChanged?: ((value: number) => void) | undefined;
} & ListRootProps & React.RefAttributes<import("./react-urx").MethodsFromPropMap<u.SystemSpec<[u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh, gap }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight, fixedHeaderHeight, fixedFooterHeight, }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}, {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}]) => {
    scrolledToInitialItem: u.StatefulStream<boolean>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh, gap }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight, fixedHeaderHeight, fixedFooterHeight, }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh, gap }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight, fixedHeaderHeight, fixedFooterHeight, }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}, {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}]) => {
    scrolledToInitialItem: u.StatefulStream<boolean>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
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
}>], ([{ totalCount, listRefresh }, { isAtBottom, atBottomState }, { scrollToIndex }, { scrolledToInitialItem }, { propsReady, didMount }, { log }, { scrollingInProgress },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}, {
    scrolledToInitialItem: u.StatefulStream<boolean>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
}, {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}, {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
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
}]) => {
    followOutput: u.StatefulStream<import("./interfaces").FollowOutput>;
    autoscrollToBottom: u.Stream<true>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}]) => {
    groupCounts: u.Stream<number[]>;
    topItemsIndexes: u.Stream<[number]>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh, gap }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight, fixedHeaderHeight, fixedFooterHeight, }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}, {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}]) => {
    scrolledToInitialItem: u.StatefulStream<boolean>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh, gap }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight, fixedHeaderHeight, fixedFooterHeight, }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
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
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ sizes, totalCount, data, firstItemIndex, gap }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { recalcInProgress },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
}, {
    groupCounts: u.Stream<number[]>;
    topItemsIndexes: u.Stream<[number]>;
}, {
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: u.StatefulStream<boolean>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
}, {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
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
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
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
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: u.StatefulStream<number[]>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh, gap }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight, fixedHeaderHeight, fixedFooterHeight, }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}]) => {
    groupCounts: u.Stream<number[]>;
    topItemsIndexes: u.Stream<[number]>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh, gap }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight, fixedHeaderHeight, fixedFooterHeight, }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}, {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}]) => {
    scrolledToInitialItem: u.StatefulStream<boolean>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh, gap }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight, fixedHeaderHeight, fixedFooterHeight, }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
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
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ sizes, totalCount, data, firstItemIndex, gap }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { recalcInProgress },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
}, {
    groupCounts: u.Stream<number[]>;
    topItemsIndexes: u.Stream<[number]>;
}, {
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: u.StatefulStream<boolean>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
}, {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
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
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
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
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: u.StatefulStream<number[]>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ scrollBy, scrollTop, deviation, scrollingInProgress }, { isScrolling, isAtBottom, scrollDirection, lastJumpDueToItemResize }, { listState }, { beforeUnshiftWith, shiftWithOffset, sizes, gap }, { log }, { recalcInProgress },]: [{
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
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: u.StatefulStream<number[]>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
}, {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
}, {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    deviation: u.StatefulStream<number>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}]) => {
    groupCounts: u.Stream<number[]>;
    topItemsIndexes: u.Stream<[number]>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh, gap }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight, fixedHeaderHeight, fixedFooterHeight, }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}, {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}]) => {
    scrolledToInitialItem: u.StatefulStream<boolean>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh, gap }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight, fixedHeaderHeight, fixedFooterHeight, }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
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
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ sizes, totalCount, data, firstItemIndex, gap }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { recalcInProgress },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
}, {
    groupCounts: u.Stream<number[]>;
    topItemsIndexes: u.Stream<[number]>;
}, {
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: u.StatefulStream<boolean>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
}, {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
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
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
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
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: u.StatefulStream<number[]>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
}>], ([{ topItemsIndexes }]: [{
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
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: u.StatefulStream<number[]>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
}]) => {
    topItemCount: u.StatefulStream<number>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}]) => {
    groupCounts: u.Stream<number[]>;
    topItemsIndexes: u.Stream<[number]>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}]) => {
    groupCounts: u.Stream<number[]>;
    topItemsIndexes: u.Stream<[number]>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh, gap }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight, fixedHeaderHeight, fixedFooterHeight, }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}, {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}]) => {
    scrolledToInitialItem: u.StatefulStream<boolean>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh, gap }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight, fixedHeaderHeight, fixedFooterHeight, }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
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
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ sizes, totalCount, data, firstItemIndex, gap }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { recalcInProgress },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
}, {
    groupCounts: u.Stream<number[]>;
    topItemsIndexes: u.Stream<[number]>;
}, {
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: u.StatefulStream<boolean>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
}, {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
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
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
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
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: u.StatefulStream<number[]>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>], ([{ sizes, firstItemIndex, data, gap }, { listState }, { didMount }]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: u.StatefulStream<number[]>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
}, {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}]) => {
    initialItemCount: u.StatefulStream<number>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}]) => {
    groupCounts: u.Stream<number[]>;
    topItemsIndexes: u.Stream<[number]>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh, gap }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight, fixedHeaderHeight, fixedFooterHeight, }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}, {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}]) => {
    scrolledToInitialItem: u.StatefulStream<boolean>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh, gap }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight, fixedHeaderHeight, fixedFooterHeight, }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
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
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ sizes, totalCount, data, firstItemIndex, gap }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { recalcInProgress },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
}, {
    groupCounts: u.Stream<number[]>;
    topItemsIndexes: u.Stream<[number]>;
}, {
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: u.StatefulStream<boolean>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
}, {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
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
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
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
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: u.StatefulStream<number[]>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
}>], ([{ footerHeight, headerHeight, fixedHeaderHeight, fixedFooterHeight }, { listState }]: [{
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
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: u.StatefulStream<number[]>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
}]) => {
    totalListHeight: u.StatefulStream<number>;
    totalListHeightChanged: u.Stream<number>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}]) => {
    groupCounts: u.Stream<number[]>;
    topItemsIndexes: u.Stream<[number]>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh, gap }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight, fixedHeaderHeight, fixedFooterHeight, }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}, {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}]) => {
    scrolledToInitialItem: u.StatefulStream<boolean>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh, gap }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight, fixedHeaderHeight, fixedFooterHeight, }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
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
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ sizes, totalCount, data, firstItemIndex, gap }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { recalcInProgress },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
}, {
    groupCounts: u.Stream<number[]>;
    topItemsIndexes: u.Stream<[number]>;
}, {
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: u.StatefulStream<boolean>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
}, {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
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
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
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
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: u.StatefulStream<number[]>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
}>], ([{ footerHeight, headerHeight, fixedHeaderHeight, fixedFooterHeight }, { listState }]: [{
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
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: u.StatefulStream<number[]>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
}]) => {
    totalListHeight: u.StatefulStream<number>;
    totalListHeightChanged: u.Stream<number>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
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
}>], ([{ totalListHeight }, { didMount }, { scrollTo }]: [{
    totalListHeight: u.StatefulStream<number>;
    totalListHeightChanged: u.Stream<number>;
}, {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
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
}]) => {
    initialScrollTop: u.StatefulStream<number>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}]) => {
    groupCounts: u.Stream<number[]>;
    topItemsIndexes: u.Stream<[number]>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh, gap }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight, fixedHeaderHeight, fixedFooterHeight, }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}, {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}]) => {
    scrolledToInitialItem: u.StatefulStream<boolean>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh, gap }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight, fixedHeaderHeight, fixedFooterHeight, }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
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
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ sizes, totalCount, data, firstItemIndex, gap }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { recalcInProgress },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
}, {
    groupCounts: u.Stream<number[]>;
    topItemsIndexes: u.Stream<[number]>;
}, {
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: u.StatefulStream<boolean>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
}, {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
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
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
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
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: u.StatefulStream<number[]>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
}>], ([{ footerHeight, headerHeight, fixedHeaderHeight, fixedFooterHeight }, { listState }]: [{
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
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: u.StatefulStream<number[]>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
}]) => {
    totalListHeight: u.StatefulStream<number>;
    totalListHeightChanged: u.Stream<number>;
}>], ([{ viewportHeight }, { totalListHeight }]: [{
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
    totalListHeight: u.StatefulStream<number>;
    totalListHeightChanged: u.Stream<number>;
}]) => {
    alignToBottom: u.StatefulStream<boolean>;
    paddingTopAddition: u.StatefulStream<number>;
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
    customScrollParent: u.StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: u.Stream<import("./interfaces").ScrollContainerState>;
    windowViewportRect: u.Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: u.Stream<ScrollToOptions>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh, gap }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight, fixedHeaderHeight, fixedFooterHeight, }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>], ([{ totalCount, groupIndices, sizes }, { scrollTop, headerHeight }]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}]) => {
    groupCounts: u.Stream<number[]>;
    topItemsIndexes: u.Stream<[number]>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh, gap }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight, fixedHeaderHeight, fixedFooterHeight, }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>], ([{ sizes, listRefresh, defaultItemSize }, { scrollTop }, { scrollToIndex }, { didMount }]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}, {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}]) => {
    scrolledToInitialItem: u.StatefulStream<boolean>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
}>, u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, listRefresh, gap }, { scrollingInProgress, viewportHeight, scrollTo, smoothScrollTargetReached, headerHeight, footerHeight, fixedHeaderHeight, fixedFooterHeight, }, { log },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
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
}>, u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ sizes, totalCount, data, firstItemIndex, gap }, groupedListSystem, { visibleRange, listBoundary, topListHeight: rangeTopListHeight }, { scrolledToInitialItem, initialTopMostItemIndex }, { topListHeight }, stateFlags, { didMount }, { recalcInProgress },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
}, {
    groupCounts: u.Stream<number[]>;
    topItemsIndexes: u.Stream<[number]>;
}, {
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    scrolledToInitialItem: u.StatefulStream<boolean>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
}, {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
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
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
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
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: u.StatefulStream<number[]>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ sizes, totalCount, gap }, { scrollTop, viewportHeight, headerHeight, fixedHeaderHeight, fixedFooterHeight, scrollingInProgress }, { scrollToIndex },]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
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
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
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
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: u.StatefulStream<number[]>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
}, {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    scrollIntoView: u.Stream<import("./interfaces").ScrollIntoViewLocation>;
}>], ([sizeRange, initialItemCount, propsReady, scrollSeek, totalListHeight, initialScrollTopSystem, alignToBottom, windowScroller, scrollIntoView,]: [{
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    initialItemCount: u.StatefulStream<number>;
}, {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}, {
    isSeeking: u.StatefulStream<boolean>;
    scrollSeekConfiguration: u.StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: u.StatefulStream<number>;
    scrollSeekRangeChanged: u.Stream<import("./interfaces").ListRange>;
}, {
    totalListHeight: u.StatefulStream<number>;
    totalListHeightChanged: u.Stream<number>;
}, {
    initialScrollTop: u.StatefulStream<number>;
}, {
    alignToBottom: u.StatefulStream<boolean>;
    paddingTopAddition: u.StatefulStream<number>;
}, {
    useWindowScroll: u.StatefulStream<boolean>;
    customScrollParent: u.StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: u.Stream<import("./interfaces").ScrollContainerState>;
    windowViewportRect: u.Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: u.Stream<ScrollToOptions>;
}, {
    scrollIntoView: u.Stream<import("./interfaces").ScrollIntoViewLocation>;
}]) => {
    scrollIntoView: u.Stream<import("./interfaces").ScrollIntoViewLocation>;
    useWindowScroll: u.StatefulStream<boolean>;
    customScrollParent: u.StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: u.Stream<import("./interfaces").ScrollContainerState>;
    windowViewportRect: u.Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: u.Stream<ScrollToOptions>;
    alignToBottom: u.StatefulStream<boolean>;
    paddingTopAddition: u.StatefulStream<number>;
    initialScrollTop: u.StatefulStream<number>;
    totalListHeight: u.StatefulStream<number>;
    totalListHeightChanged: u.Stream<number>;
    isSeeking: u.StatefulStream<boolean>;
    scrollSeekConfiguration: u.StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: u.StatefulStream<number>;
    scrollSeekRangeChanged: u.Stream<import("./interfaces").ListRange>;
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
    initialItemCount: u.StatefulStream<number>;
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}>, u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}>], ([{ totalCount, sizeRanges, fixedItemSize, defaultItemSize, trackItemSizes, itemSize, data, firstItemIndex, groupIndices, statefulTotalCount, gap, sizes, }, { initialTopMostItemIndex, scrolledToInitialItem }, domIO, followOutput, { listState, topItemsIndexes, ...flags }, { scrollToIndex }, _, { topItemCount }, { groupCounts }, featureGroup1, log,]: [{
    data: u.StatefulStream<import("./sizeSystem").Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<number | undefined>;
    fixedItemSize: u.StatefulStream<number | undefined>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
}, {
    scrolledToInitialItem: u.StatefulStream<boolean>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
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
    followOutput: u.StatefulStream<import("./interfaces").FollowOutput>;
    autoscrollToBottom: u.Stream<true>;
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
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    topItemsIndexes: u.StatefulStream<number[]>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
}, {
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    topListHeight: u.StatefulStream<number>;
}, {
    deviation: u.StatefulStream<number>;
}, {
    topItemCount: u.StatefulStream<number>;
}, {
    groupCounts: u.Stream<number[]>;
    topItemsIndexes: u.Stream<[number]>;
}, {
    scrollIntoView: u.Stream<import("./interfaces").ScrollIntoViewLocation>;
    useWindowScroll: u.StatefulStream<boolean>;
    customScrollParent: u.StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: u.Stream<import("./interfaces").ScrollContainerState>;
    windowViewportRect: u.Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: u.Stream<ScrollToOptions>;
    alignToBottom: u.StatefulStream<boolean>;
    paddingTopAddition: u.StatefulStream<number>;
    initialScrollTop: u.StatefulStream<number>;
    totalListHeight: u.StatefulStream<number>;
    totalListHeightChanged: u.Stream<number>;
    isSeeking: u.StatefulStream<boolean>;
    scrollSeekConfiguration: u.StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: u.StatefulStream<number>;
    scrollSeekRangeChanged: u.Stream<import("./interfaces").ListRange>;
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
    initialItemCount: u.StatefulStream<number>;
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
}, {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
}]) => {
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
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
    scrollIntoView: u.Stream<import("./interfaces").ScrollIntoViewLocation>;
    useWindowScroll: u.StatefulStream<boolean>;
    customScrollParent: u.StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: u.Stream<import("./interfaces").ScrollContainerState>;
    windowViewportRect: u.Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: u.Stream<ScrollToOptions>;
    alignToBottom: u.StatefulStream<boolean>;
    paddingTopAddition: u.StatefulStream<number>;
    initialScrollTop: u.StatefulStream<number>;
    totalListHeight: u.StatefulStream<number>;
    totalListHeightChanged: u.Stream<number>;
    isSeeking: u.StatefulStream<boolean>;
    scrollSeekConfiguration: u.StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: u.StatefulStream<number>;
    scrollSeekRangeChanged: u.Stream<import("./interfaces").ListRange>;
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
    initialItemCount: u.StatefulStream<number>;
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    isScrolling: u.StatefulStream<boolean>;
    isAtTop: u.StatefulStream<boolean>;
    isAtBottom: u.StatefulStream<boolean>;
    atBottomState: u.Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: u.Stream<boolean>;
    atBottomStateChange: u.Stream<boolean>;
    scrollDirection: u.StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: u.StatefulStream<number>;
    atTopThreshold: u.StatefulStream<number>;
    lastJumpDueToItemResize: u.StatefulStream<number>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
    statefulTotalCount: u.StatefulStream<number>;
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
    groupIndices: u.StatefulStream<number[]>;
    followOutput: u.StatefulStream<import("./interfaces").FollowOutput>;
    autoscrollToBottom: u.Stream<true>;
    totalCount: u.Stream<number>;
    data: u.StatefulStream<import("./sizeSystem").Data>;
    firstItemIndex: u.StatefulStream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
    scrolledToInitialItem: u.StatefulStream<boolean>;
    topItemsIndexes: u.StatefulStream<number[]>;
    topItemCount: u.StatefulStream<number>;
    groupCounts: u.Stream<number[]>;
    fixedItemHeight: u.StatefulStream<number | undefined>;
    defaultItemHeight: u.StatefulStream<number | undefined>;
    gap: u.StatefulStream<number>;
}>, u.SystemSpec<u.SystemSpecs, () => {
    context: u.StatefulStream<unknown>;
    itemContent: u.StatefulStream<ItemContent<any, any> | GroupItemContent<any, any>>;
    groupContent: u.StatefulStream<GroupContent<any>>;
    components: u.StatefulStream<Components<any, unknown>>;
    computeItemKey: u.StatefulStream<ComputeItemKey<any, any>>;
    headerFooterTag: u.StatefulStream<string>;
    scrollerRef: u.StatefulStream<(ref: HTMLElement | Window | null) => void>;
    FooterComponent: u.StatefulStream<"div" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    HeaderComponent: u.StatefulStream<"div" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    TopItemListComponent: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").TopItemListProps & {
        context?: unknown;
    }> | null | undefined>;
    ListComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children" | "ref"> & {
        'data-test-id': string;
    } & {
        context?: unknown;
    }> | null | undefined>;
    ItemComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children"> & {
        'data-index': number;
        'data-item-index': number;
        'data-item-group-index'?: number | undefined;
        'data-known-size': number;
        item: any;
    } & {
        context?: unknown;
    }> | null | undefined>;
    GroupComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children"> & {
        'data-index': number;
        'data-item-index': number;
        'data-known-size': number;
    } & {
        context?: unknown;
    }> | null | undefined>;
    ScrollerComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children" | "ref" | "tabIndex"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: unknown;
    }> | null | undefined>;
    EmptyPlaceholder: u.StatefulStream<"div" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    ScrollSeekPlaceholder: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").ScrollSeekPlaceholderProps & {
        context?: unknown;
    }> | null | undefined>;
}>], ([listSystem, propsSystem]: [{
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
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
    scrollIntoView: u.Stream<import("./interfaces").ScrollIntoViewLocation>;
    useWindowScroll: u.StatefulStream<boolean>;
    customScrollParent: u.StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: u.Stream<import("./interfaces").ScrollContainerState>;
    windowViewportRect: u.Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: u.Stream<ScrollToOptions>;
    alignToBottom: u.StatefulStream<boolean>;
    paddingTopAddition: u.StatefulStream<number>;
    initialScrollTop: u.StatefulStream<number>;
    totalListHeight: u.StatefulStream<number>;
    totalListHeightChanged: u.Stream<number>;
    isSeeking: u.StatefulStream<boolean>;
    scrollSeekConfiguration: u.StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: u.StatefulStream<number>;
    scrollSeekRangeChanged: u.Stream<import("./interfaces").ListRange>;
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
    initialItemCount: u.StatefulStream<number>;
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    isScrolling: u.StatefulStream<boolean>;
    isAtTop: u.StatefulStream<boolean>;
    isAtBottom: u.StatefulStream<boolean>;
    atBottomState: u.Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: u.Stream<boolean>;
    atBottomStateChange: u.Stream<boolean>;
    scrollDirection: u.StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: u.StatefulStream<number>;
    atTopThreshold: u.StatefulStream<number>;
    lastJumpDueToItemResize: u.StatefulStream<number>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
    statefulTotalCount: u.StatefulStream<number>;
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
    groupIndices: u.StatefulStream<number[]>;
    followOutput: u.StatefulStream<import("./interfaces").FollowOutput>;
    autoscrollToBottom: u.Stream<true>;
    totalCount: u.Stream<number>;
    data: u.StatefulStream<import("./sizeSystem").Data>;
    firstItemIndex: u.StatefulStream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
    scrolledToInitialItem: u.StatefulStream<boolean>;
    topItemsIndexes: u.StatefulStream<number[]>;
    topItemCount: u.StatefulStream<number>;
    groupCounts: u.Stream<number[]>;
    fixedItemHeight: u.StatefulStream<number | undefined>;
    defaultItemHeight: u.StatefulStream<number | undefined>;
    gap: u.StatefulStream<number>;
}, {
    context: u.StatefulStream<unknown>;
    itemContent: u.StatefulStream<ItemContent<any, any> | GroupItemContent<any, any>>;
    groupContent: u.StatefulStream<GroupContent<any>>;
    components: u.StatefulStream<Components<any, unknown>>;
    computeItemKey: u.StatefulStream<ComputeItemKey<any, any>>;
    headerFooterTag: u.StatefulStream<string>;
    scrollerRef: u.StatefulStream<(ref: HTMLElement | Window | null) => void>;
    FooterComponent: u.StatefulStream<"div" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    HeaderComponent: u.StatefulStream<"div" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    TopItemListComponent: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").TopItemListProps & {
        context?: unknown;
    }> | null | undefined>;
    ListComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children" | "ref"> & {
        'data-test-id': string;
    } & {
        context?: unknown;
    }> | null | undefined>;
    ItemComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children"> & {
        'data-index': number;
        'data-item-index': number;
        'data-item-group-index'?: number | undefined;
        'data-known-size': number;
        item: any;
    } & {
        context?: unknown;
    }> | null | undefined>;
    GroupComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children"> & {
        'data-index': number;
        'data-item-index': number;
        'data-known-size': number;
    } & {
        context?: unknown;
    }> | null | undefined>;
    ScrollerComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children" | "ref" | "tabIndex"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: unknown;
    }> | null | undefined>;
    EmptyPlaceholder: u.StatefulStream<"div" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    ScrollSeekPlaceholder: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").ScrollSeekPlaceholderProps & {
        context?: unknown;
    }> | null | undefined>;
}]) => {
    context: u.StatefulStream<unknown>;
    itemContent: u.StatefulStream<ItemContent<any, any> | GroupItemContent<any, any>>;
    groupContent: u.StatefulStream<GroupContent<any>>;
    components: u.StatefulStream<Components<any, unknown>>;
    computeItemKey: u.StatefulStream<ComputeItemKey<any, any>>;
    headerFooterTag: u.StatefulStream<string>;
    scrollerRef: u.StatefulStream<(ref: HTMLElement | Window | null) => void>;
    FooterComponent: u.StatefulStream<"div" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    HeaderComponent: u.StatefulStream<"div" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    TopItemListComponent: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").TopItemListProps & {
        context?: unknown;
    }> | null | undefined>;
    ListComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children" | "ref"> & {
        'data-test-id': string;
    } & {
        context?: unknown;
    }> | null | undefined>;
    ItemComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children"> & {
        'data-index': number;
        'data-item-index': number;
        'data-item-group-index'?: number | undefined;
        'data-known-size': number;
        item: any;
    } & {
        context?: unknown;
    }> | null | undefined>;
    GroupComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children"> & {
        'data-index': number;
        'data-item-index': number;
        'data-known-size': number;
    } & {
        context?: unknown;
    }> | null | undefined>;
    ScrollerComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children" | "ref" | "tabIndex"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: unknown;
    }> | null | undefined>;
    EmptyPlaceholder: u.StatefulStream<"div" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    ScrollSeekPlaceholder: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").ScrollSeekPlaceholderProps & {
        context?: unknown;
    }> | null | undefined>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
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
    scrollIntoView: u.Stream<import("./interfaces").ScrollIntoViewLocation>;
    useWindowScroll: u.StatefulStream<boolean>;
    customScrollParent: u.StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: u.Stream<import("./interfaces").ScrollContainerState>;
    windowViewportRect: u.Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: u.Stream<ScrollToOptions>;
    alignToBottom: u.StatefulStream<boolean>;
    paddingTopAddition: u.StatefulStream<number>;
    initialScrollTop: u.StatefulStream<number>;
    totalListHeight: u.StatefulStream<number>;
    totalListHeightChanged: u.Stream<number>;
    isSeeking: u.StatefulStream<boolean>;
    scrollSeekConfiguration: u.StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: u.StatefulStream<number>;
    scrollSeekRangeChanged: u.Stream<import("./interfaces").ListRange>;
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
    initialItemCount: u.StatefulStream<number>;
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    isScrolling: u.StatefulStream<boolean>;
    isAtTop: u.StatefulStream<boolean>;
    isAtBottom: u.StatefulStream<boolean>;
    atBottomState: u.Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: u.Stream<boolean>;
    atBottomStateChange: u.Stream<boolean>;
    scrollDirection: u.StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: u.StatefulStream<number>;
    atTopThreshold: u.StatefulStream<number>;
    lastJumpDueToItemResize: u.StatefulStream<number>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
    statefulTotalCount: u.StatefulStream<number>;
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
    groupIndices: u.StatefulStream<number[]>;
    followOutput: u.StatefulStream<import("./interfaces").FollowOutput>;
    autoscrollToBottom: u.Stream<true>;
    totalCount: u.Stream<number>;
    data: u.StatefulStream<import("./sizeSystem").Data>;
    firstItemIndex: u.StatefulStream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
    scrolledToInitialItem: u.StatefulStream<boolean>;
    topItemsIndexes: u.StatefulStream<number[]>;
    topItemCount: u.StatefulStream<number>;
    groupCounts: u.Stream<number[]>;
    fixedItemHeight: u.StatefulStream<number | undefined>;
    defaultItemHeight: u.StatefulStream<number | undefined>;
    gap: u.StatefulStream<number>;
}>, {
    required: {};
    optional: {
        context: "context";
        followOutput: "followOutput";
        itemContent: "itemContent";
        groupContent: "groupContent";
        overscan: "overscan";
        increaseViewportBy: "increaseViewportBy";
        totalCount: "totalCount";
        groupCounts: "groupCounts";
        topItemCount: "topItemCount";
        firstItemIndex: "firstItemIndex";
        initialTopMostItemIndex: "initialTopMostItemIndex";
        components: "components";
        atBottomThreshold: "atBottomThreshold";
        atTopThreshold: "atTopThreshold";
        computeItemKey: "computeItemKey";
        defaultItemHeight: "defaultItemHeight";
        fixedItemHeight: "fixedItemHeight";
        itemSize: "itemSize";
        scrollSeekConfiguration: "scrollSeekConfiguration";
        headerFooterTag: "headerFooterTag";
        data: "data";
        initialItemCount: "initialItemCount";
        initialScrollTop: "initialScrollTop";
        alignToBottom: "alignToBottom";
        useWindowScroll: "useWindowScroll";
        customScrollParent: "customScrollParent";
        scrollerRef: "scrollerRef";
        logLevel: "logLevel";
    };
    methods: {
        scrollToIndex: "scrollToIndex";
        scrollIntoView: "scrollIntoView";
        scrollTo: "scrollTo";
        scrollBy: "scrollBy";
        autoscrollToBottom: "autoscrollToBottom";
    };
    events: {
        isScrolling: "isScrolling";
        endReached: "endReached";
        startReached: "startReached";
        rangeChanged: "rangeChanged";
        atBottomStateChange: "atBottomStateChange";
        atTopStateChange: "atTopStateChange";
        totalListHeightChanged: "totalListHeightChanged";
        itemsRendered: "itemsRendered";
        groupIndices: "groupIndices";
    };
}>>>, usePublisher: <K extends "propsReady" | "data" | "log" | "logLevel" | "sizes" | "groupIndices" | "gap" | "totalCount" | "sizeRanges" | "firstItemIndex" | "statefulTotalCount" | "trackItemSizes" | "itemSize" | "scrollContainerState" | "scrollTop" | "viewportHeight" | "headerHeight" | "fixedHeaderHeight" | "fixedFooterHeight" | "footerHeight" | "scrollHeight" | "smoothScrollTargetReached" | "scrollTo" | "scrollBy" | "statefulScrollTop" | "deviation" | "scrollingInProgress" | "scrollToIndex" | "topListHeight" | "isScrolling" | "isAtTop" | "isAtBottom" | "atBottomThreshold" | "atBottomState" | "atTopStateChange" | "atBottomStateChange" | "scrollDirection" | "atTopThreshold" | "scrollVelocity" | "lastJumpDueToItemResize" | "didMount" | "scrolledToInitialItem" | "initialTopMostItemIndex" | "followOutput" | "autoscrollToBottom" | "groupCounts" | "topItemsIndexes" | "listBoundary" | "overscan" | "increaseViewportBy" | "visibleRange" | "listState" | "endReached" | "startReached" | "rangeChanged" | "itemsRendered" | "initialItemCount" | "isSeeking" | "scrollSeekConfiguration" | "scrollSeekRangeChanged" | "topItemCount" | "totalListHeight" | "totalListHeightChanged" | "initialScrollTop" | "alignToBottom" | "paddingTopAddition" | "useWindowScroll" | "customScrollParent" | "windowScrollContainerState" | "windowViewportRect" | "windowScrollTo" | "scrollIntoView" | "fixedItemHeight" | "defaultItemHeight" | "context" | "itemContent" | "components" | "computeItemKey" | "scrollerRef" | "headerFooterTag" | "ScrollSeekPlaceholder" | "FooterComponent" | "HeaderComponent" | "ListComponent" | "ItemComponent" | "ScrollerComponent" | "groupContent" | "EmptyPlaceholder" | "TopItemListComponent" | "GroupComponent">(key: K) => (value: {
    context: u.StatefulStream<unknown>;
    itemContent: u.StatefulStream<ItemContent<any, any> | GroupItemContent<any, any>>;
    groupContent: u.StatefulStream<GroupContent<any>>;
    components: u.StatefulStream<Components<any, unknown>>;
    computeItemKey: u.StatefulStream<ComputeItemKey<any, any>>;
    headerFooterTag: u.StatefulStream<string>;
    scrollerRef: u.StatefulStream<(ref: HTMLElement | Window | null) => void>;
    FooterComponent: u.StatefulStream<"div" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    HeaderComponent: u.StatefulStream<"div" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    TopItemListComponent: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").TopItemListProps & {
        context?: unknown;
    }> | null | undefined>;
    ListComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children" | "ref"> & {
        'data-test-id': string;
    } & {
        context?: unknown;
    }> | null | undefined>;
    ItemComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children"> & {
        'data-index': number;
        'data-item-index': number;
        'data-item-group-index'?: number | undefined;
        'data-known-size': number;
        item: any;
    } & {
        context?: unknown;
    }> | null | undefined>;
    GroupComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children"> & {
        'data-index': number;
        'data-item-index': number;
        'data-known-size': number;
    } & {
        context?: unknown;
    }> | null | undefined>;
    ScrollerComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children" | "ref" | "tabIndex"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: unknown;
    }> | null | undefined>;
    EmptyPlaceholder: u.StatefulStream<"div" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    ScrollSeekPlaceholder: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").ScrollSeekPlaceholderProps & {
        context?: unknown;
    }> | null | undefined>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
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
    scrollIntoView: u.Stream<import("./interfaces").ScrollIntoViewLocation>;
    useWindowScroll: u.StatefulStream<boolean>;
    customScrollParent: u.StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: u.Stream<import("./interfaces").ScrollContainerState>;
    windowViewportRect: u.Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: u.Stream<ScrollToOptions>;
    alignToBottom: u.StatefulStream<boolean>;
    paddingTopAddition: u.StatefulStream<number>;
    initialScrollTop: u.StatefulStream<number>;
    totalListHeight: u.StatefulStream<number>;
    totalListHeightChanged: u.Stream<number>;
    isSeeking: u.StatefulStream<boolean>;
    scrollSeekConfiguration: u.StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: u.StatefulStream<number>;
    scrollSeekRangeChanged: u.Stream<import("./interfaces").ListRange>;
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
    initialItemCount: u.StatefulStream<number>;
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    isScrolling: u.StatefulStream<boolean>;
    isAtTop: u.StatefulStream<boolean>;
    isAtBottom: u.StatefulStream<boolean>;
    atBottomState: u.Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: u.Stream<boolean>;
    atBottomStateChange: u.Stream<boolean>;
    scrollDirection: u.StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: u.StatefulStream<number>;
    atTopThreshold: u.StatefulStream<number>;
    lastJumpDueToItemResize: u.StatefulStream<number>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
    statefulTotalCount: u.StatefulStream<number>;
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
    groupIndices: u.StatefulStream<number[]>;
    followOutput: u.StatefulStream<import("./interfaces").FollowOutput>;
    autoscrollToBottom: u.Stream<true>;
    totalCount: u.Stream<number>;
    data: u.StatefulStream<import("./sizeSystem").Data>;
    firstItemIndex: u.StatefulStream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
    scrolledToInitialItem: u.StatefulStream<boolean>;
    topItemsIndexes: u.StatefulStream<number[]>;
    topItemCount: u.StatefulStream<number>;
    groupCounts: u.Stream<number[]>;
    fixedItemHeight: u.StatefulStream<number | undefined>;
    defaultItemHeight: u.StatefulStream<number | undefined>;
    gap: u.StatefulStream<number>;
}[K] extends u.Stream<infer R> ? R : never) => void, useEmitterValue: <K extends "propsReady" | "data" | "log" | "logLevel" | "sizes" | "groupIndices" | "gap" | "totalCount" | "sizeRanges" | "firstItemIndex" | "statefulTotalCount" | "trackItemSizes" | "itemSize" | "scrollContainerState" | "scrollTop" | "viewportHeight" | "headerHeight" | "fixedHeaderHeight" | "fixedFooterHeight" | "footerHeight" | "scrollHeight" | "smoothScrollTargetReached" | "scrollTo" | "scrollBy" | "statefulScrollTop" | "deviation" | "scrollingInProgress" | "scrollToIndex" | "topListHeight" | "isScrolling" | "isAtTop" | "isAtBottom" | "atBottomThreshold" | "atBottomState" | "atTopStateChange" | "atBottomStateChange" | "scrollDirection" | "atTopThreshold" | "scrollVelocity" | "lastJumpDueToItemResize" | "didMount" | "scrolledToInitialItem" | "initialTopMostItemIndex" | "followOutput" | "autoscrollToBottom" | "groupCounts" | "topItemsIndexes" | "listBoundary" | "overscan" | "increaseViewportBy" | "visibleRange" | "listState" | "endReached" | "startReached" | "rangeChanged" | "itemsRendered" | "initialItemCount" | "isSeeking" | "scrollSeekConfiguration" | "scrollSeekRangeChanged" | "topItemCount" | "totalListHeight" | "totalListHeightChanged" | "initialScrollTop" | "alignToBottom" | "paddingTopAddition" | "useWindowScroll" | "customScrollParent" | "windowScrollContainerState" | "windowViewportRect" | "windowScrollTo" | "scrollIntoView" | "fixedItemHeight" | "defaultItemHeight" | "context" | "itemContent" | "components" | "computeItemKey" | "scrollerRef" | "headerFooterTag" | "ScrollSeekPlaceholder" | "FooterComponent" | "HeaderComponent" | "ListComponent" | "ItemComponent" | "ScrollerComponent" | "groupContent" | "EmptyPlaceholder" | "TopItemListComponent" | "GroupComponent", V = {
    context: u.StatefulStream<unknown>;
    itemContent: u.StatefulStream<ItemContent<any, any> | GroupItemContent<any, any>>;
    groupContent: u.StatefulStream<GroupContent<any>>;
    components: u.StatefulStream<Components<any, unknown>>;
    computeItemKey: u.StatefulStream<ComputeItemKey<any, any>>;
    headerFooterTag: u.StatefulStream<string>;
    scrollerRef: u.StatefulStream<(ref: HTMLElement | Window | null) => void>;
    FooterComponent: u.StatefulStream<"div" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    HeaderComponent: u.StatefulStream<"div" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    TopItemListComponent: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").TopItemListProps & {
        context?: unknown;
    }> | null | undefined>;
    ListComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children" | "ref"> & {
        'data-test-id': string;
    } & {
        context?: unknown;
    }> | null | undefined>;
    ItemComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children"> & {
        'data-index': number;
        'data-item-index': number;
        'data-item-group-index'?: number | undefined;
        'data-known-size': number;
        item: any;
    } & {
        context?: unknown;
    }> | null | undefined>;
    GroupComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children"> & {
        'data-index': number;
        'data-item-index': number;
        'data-known-size': number;
    } & {
        context?: unknown;
    }> | null | undefined>;
    ScrollerComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children" | "ref" | "tabIndex"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: unknown;
    }> | null | undefined>;
    EmptyPlaceholder: u.StatefulStream<"div" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    ScrollSeekPlaceholder: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").ScrollSeekPlaceholderProps & {
        context?: unknown;
    }> | null | undefined>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
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
    scrollIntoView: u.Stream<import("./interfaces").ScrollIntoViewLocation>;
    useWindowScroll: u.StatefulStream<boolean>;
    customScrollParent: u.StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: u.Stream<import("./interfaces").ScrollContainerState>;
    windowViewportRect: u.Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: u.Stream<ScrollToOptions>;
    alignToBottom: u.StatefulStream<boolean>;
    paddingTopAddition: u.StatefulStream<number>;
    initialScrollTop: u.StatefulStream<number>;
    totalListHeight: u.StatefulStream<number>;
    totalListHeightChanged: u.Stream<number>;
    isSeeking: u.StatefulStream<boolean>;
    scrollSeekConfiguration: u.StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: u.StatefulStream<number>;
    scrollSeekRangeChanged: u.Stream<import("./interfaces").ListRange>;
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
    initialItemCount: u.StatefulStream<number>;
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    isScrolling: u.StatefulStream<boolean>;
    isAtTop: u.StatefulStream<boolean>;
    isAtBottom: u.StatefulStream<boolean>;
    atBottomState: u.Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: u.Stream<boolean>;
    atBottomStateChange: u.Stream<boolean>;
    scrollDirection: u.StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: u.StatefulStream<number>;
    atTopThreshold: u.StatefulStream<number>;
    lastJumpDueToItemResize: u.StatefulStream<number>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
    statefulTotalCount: u.StatefulStream<number>;
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
    groupIndices: u.StatefulStream<number[]>;
    followOutput: u.StatefulStream<import("./interfaces").FollowOutput>;
    autoscrollToBottom: u.Stream<true>;
    totalCount: u.Stream<number>;
    data: u.StatefulStream<import("./sizeSystem").Data>;
    firstItemIndex: u.StatefulStream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
    scrolledToInitialItem: u.StatefulStream<boolean>;
    topItemsIndexes: u.StatefulStream<number[]>;
    topItemCount: u.StatefulStream<number>;
    groupCounts: u.Stream<number[]>;
    fixedItemHeight: u.StatefulStream<number | undefined>;
    defaultItemHeight: u.StatefulStream<number | undefined>;
    gap: u.StatefulStream<number>;
}[K] extends u.StatefulStream<infer R> ? R : never>(key: K) => V, useEmitter: <K extends "propsReady" | "data" | "log" | "logLevel" | "sizes" | "groupIndices" | "gap" | "totalCount" | "sizeRanges" | "firstItemIndex" | "statefulTotalCount" | "trackItemSizes" | "itemSize" | "scrollContainerState" | "scrollTop" | "viewportHeight" | "headerHeight" | "fixedHeaderHeight" | "fixedFooterHeight" | "footerHeight" | "scrollHeight" | "smoothScrollTargetReached" | "scrollTo" | "scrollBy" | "statefulScrollTop" | "deviation" | "scrollingInProgress" | "scrollToIndex" | "topListHeight" | "isScrolling" | "isAtTop" | "isAtBottom" | "atBottomThreshold" | "atBottomState" | "atTopStateChange" | "atBottomStateChange" | "scrollDirection" | "atTopThreshold" | "scrollVelocity" | "lastJumpDueToItemResize" | "didMount" | "scrolledToInitialItem" | "initialTopMostItemIndex" | "followOutput" | "autoscrollToBottom" | "groupCounts" | "topItemsIndexes" | "listBoundary" | "overscan" | "increaseViewportBy" | "visibleRange" | "listState" | "endReached" | "startReached" | "rangeChanged" | "itemsRendered" | "initialItemCount" | "isSeeking" | "scrollSeekConfiguration" | "scrollSeekRangeChanged" | "topItemCount" | "totalListHeight" | "totalListHeightChanged" | "initialScrollTop" | "alignToBottom" | "paddingTopAddition" | "useWindowScroll" | "customScrollParent" | "windowScrollContainerState" | "windowViewportRect" | "windowScrollTo" | "scrollIntoView" | "fixedItemHeight" | "defaultItemHeight" | "context" | "itemContent" | "components" | "computeItemKey" | "scrollerRef" | "headerFooterTag" | "ScrollSeekPlaceholder" | "FooterComponent" | "HeaderComponent" | "ListComponent" | "ItemComponent" | "ScrollerComponent" | "groupContent" | "EmptyPlaceholder" | "TopItemListComponent" | "GroupComponent", V = {
    context: u.StatefulStream<unknown>;
    itemContent: u.StatefulStream<ItemContent<any, any> | GroupItemContent<any, any>>;
    groupContent: u.StatefulStream<GroupContent<any>>;
    components: u.StatefulStream<Components<any, unknown>>;
    computeItemKey: u.StatefulStream<ComputeItemKey<any, any>>;
    headerFooterTag: u.StatefulStream<string>;
    scrollerRef: u.StatefulStream<(ref: HTMLElement | Window | null) => void>;
    FooterComponent: u.StatefulStream<"div" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    HeaderComponent: u.StatefulStream<"div" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    TopItemListComponent: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").TopItemListProps & {
        context?: unknown;
    }> | null | undefined>;
    ListComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children" | "ref"> & {
        'data-test-id': string;
    } & {
        context?: unknown;
    }> | null | undefined>;
    ItemComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children"> & {
        'data-index': number;
        'data-item-index': number;
        'data-item-group-index'?: number | undefined;
        'data-known-size': number;
        item: any;
    } & {
        context?: unknown;
    }> | null | undefined>;
    GroupComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children"> & {
        'data-index': number;
        'data-item-index': number;
        'data-known-size': number;
    } & {
        context?: unknown;
    }> | null | undefined>;
    ScrollerComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children" | "ref" | "tabIndex"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: unknown;
    }> | null | undefined>;
    EmptyPlaceholder: u.StatefulStream<"div" | React.ComponentType<{
        context?: unknown;
    }> | null | undefined>;
    ScrollSeekPlaceholder: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").ScrollSeekPlaceholderProps & {
        context?: unknown;
    }> | null | undefined>;
    sizes: u.StatefulStream<import("./sizeSystem").SizeState>;
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<import("./loggerSystem").LogLevel>;
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
    scrollIntoView: u.Stream<import("./interfaces").ScrollIntoViewLocation>;
    useWindowScroll: u.StatefulStream<boolean>;
    customScrollParent: u.StatefulStream<HTMLElement | undefined>;
    windowScrollContainerState: u.Stream<import("./interfaces").ScrollContainerState>;
    windowViewportRect: u.Stream<import("./interfaces").WindowViewportInfo>;
    windowScrollTo: u.Stream<ScrollToOptions>;
    alignToBottom: u.StatefulStream<boolean>;
    paddingTopAddition: u.StatefulStream<number>;
    initialScrollTop: u.StatefulStream<number>;
    totalListHeight: u.StatefulStream<number>;
    totalListHeightChanged: u.Stream<number>;
    isSeeking: u.StatefulStream<boolean>;
    scrollSeekConfiguration: u.StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollVelocity: u.StatefulStream<number>;
    scrollSeekRangeChanged: u.Stream<import("./interfaces").ListRange>;
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
    initialItemCount: u.StatefulStream<number>;
    listBoundary: u.Stream<import("./sizeRangeSystem").NumberTuple>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    topListHeight: u.StatefulStream<number>;
    increaseViewportBy: u.StatefulStream<import("./sizeRangeSystem").ViewportIncrease>;
    visibleRange: u.StatefulStream<import("./sizeRangeSystem").NumberTuple>;
    isScrolling: u.StatefulStream<boolean>;
    isAtTop: u.StatefulStream<boolean>;
    isAtBottom: u.StatefulStream<boolean>;
    atBottomState: u.Stream<import("./stateFlagsSystem").AtBottomState>;
    atTopStateChange: u.Stream<boolean>;
    atBottomStateChange: u.Stream<boolean>;
    scrollDirection: u.StatefulStream<import("./stateFlagsSystem").ScrollDirection>;
    atBottomThreshold: u.StatefulStream<number>;
    atTopThreshold: u.StatefulStream<number>;
    lastJumpDueToItemResize: u.StatefulStream<number>;
    endReached: u.Stream<number>;
    startReached: u.Stream<number>;
    rangeChanged: u.Stream<import("./interfaces").ListRange>;
    itemsRendered: u.Stream<import("./listStateSystem").ListItems>;
    statefulTotalCount: u.StatefulStream<number>;
    listState: u.StatefulStream<import("./listStateSystem").ListState>;
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<import("./interfaces").SizeFunction>;
    groupIndices: u.StatefulStream<number[]>;
    followOutput: u.StatefulStream<import("./interfaces").FollowOutput>;
    autoscrollToBottom: u.Stream<true>;
    totalCount: u.Stream<number>;
    data: u.StatefulStream<import("./sizeSystem").Data>;
    firstItemIndex: u.StatefulStream<number>;
    sizeRanges: u.Stream<import("./sizeSystem").SizeRange[]>;
    initialTopMostItemIndex: u.StatefulStream<number | import("./interfaces").FlatIndexLocationWithAlign>;
    scrolledToInitialItem: u.StatefulStream<boolean>;
    topItemsIndexes: u.StatefulStream<number[]>;
    topItemCount: u.StatefulStream<number>;
    groupCounts: u.Stream<number[]>;
    fixedItemHeight: u.StatefulStream<number | undefined>;
    defaultItemHeight: u.StatefulStream<number | undefined>;
    gap: u.StatefulStream<number>;
}[K] extends u.Stream<infer R> ? R : never>(key: K, callback: (value: V) => void) => void;
export declare const Virtuoso: <ItemData = any, Context = any>(props: VirtuosoProps<ItemData, Context> & {
    ref?: React.Ref<VirtuosoHandle> | undefined;
}) => React.ReactElement;
export declare const GroupedVirtuoso: <ItemData = any, Context = any>(props: GroupedVirtuosoProps<ItemData, Context> & {
    ref?: React.Ref<GroupedVirtuosoHandle> | undefined;
}) => React.ReactElement;
export {};
//# sourceMappingURL=Virtuoso.d.ts.map