import * as u from './urx';
import { FlatIndexLocationWithAlign } from './interfaces';
export declare function getInitialTopMostItemIndexNumber(location: number | FlatIndexLocationWithAlign, totalCount: number): number;
export declare const initialTopMostItemIndexSystem: u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
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
    initialTopMostItemIndex: u.StatefulStream<number | FlatIndexLocationWithAlign>;
}>;
//# sourceMappingURL=initialTopMostItemIndexSystem.d.ts.map