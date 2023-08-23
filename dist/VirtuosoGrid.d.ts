import { RefHandle } from './react-urx';
import * as u from './urx';
import React from 'react';
import { GridComponents, GridComputeItemKey, GridItemContent, GridRootProps } from './interfaces';
import { Log, LogLevel } from './loggerSystem';
import { VirtuosoGridHandle, VirtuosoGridProps } from './component-interfaces/VirtuosoGrid';
declare const Grid: React.ForwardRefExoticComponent<{} & {
    data?: import("./gridSystem").Data;
    totalCount?: number | undefined;
    overscan?: import("./sizeRangeSystem").Overscan | undefined;
    initialItemCount?: number | undefined;
    scrollSeekConfiguration?: false | import("./interfaces").ScrollSeekConfiguration | undefined;
    useWindowScroll?: boolean | undefined;
    customScrollParent?: HTMLElement | undefined;
    context?: unknown;
    itemContent?: GridItemContent<any, any> | undefined;
    components?: GridComponents<any> | undefined;
    computeItemKey?: GridComputeItemKey<any, any> | undefined;
    scrollerRef?: ((ref: HTMLElement | null) => void) | undefined;
    listClassName?: string | undefined;
    itemClassName?: string | undefined;
    headerFooterTag?: string | undefined;
} & {
    isScrolling?: ((value: boolean) => void) | undefined;
    atTopStateChange?: ((value: boolean) => void) | undefined;
    atBottomStateChange?: ((value: boolean) => void) | undefined;
    endReached?: ((value: number) => void) | undefined;
    startReached?: ((value: number) => void) | undefined;
    rangeChanged?: ((value: import("./interfaces").ListRange) => void) | undefined;
} & GridRootProps & React.RefAttributes<import("./react-urx").MethodsFromPropMap<u.SystemSpec<[u.SystemSpec<[u.SystemSpec<[u.SystemSpec<never[], () => {
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
    log: u.StatefulStream<Log>;
    logLevel: u.StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<Log>;
    logLevel: u.StatefulStream<LogLevel>;
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
    log: u.StatefulStream<Log>;
    logLevel: u.StatefulStream<LogLevel>;
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
    log: u.StatefulStream<Log>;
    logLevel: u.StatefulStream<LogLevel>;
}]) => {
    log: u.StatefulStream<Log>;
    logLevel: u.StatefulStream<LogLevel>;
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
    gridState: u.StatefulStream<import("./gridSystem").GridState>;
    totalListHeight: u.StatefulStream<number>;
    isSeeking: u.StatefulStream<boolean>;
    scrollSeekConfiguration: u.StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollSeekRangeChanged: u.Stream<import("./interfaces").ListRange>;
    data: u.StatefulStream<import("./gridSystem").Data>;
    totalCount: u.StatefulStream<number>;
    viewportDimensions: u.StatefulStream<import("./gridSystem").ElementDimensions>;
    itemDimensions: u.StatefulStream<import("./gridSystem").ElementDimensions>;
    scrollTop: u.Stream<number>;
    scrollHeight: u.Stream<number>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    scrollBy: u.Stream<ScrollToOptions>;
    scrollTo: u.Stream<ScrollToOptions>;
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
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
    gap: u.StatefulStream<import("./gridSystem").Gap>;
}>, u.SystemSpec<u.SystemSpecs, () => {
    context: u.StatefulStream<unknown>;
    itemContent: u.StatefulStream<GridItemContent<any, any>>;
    components: u.StatefulStream<GridComponents<any>>;
    computeItemKey: u.StatefulStream<GridComputeItemKey<any, any>>;
    itemClassName: u.StatefulStream<string>;
    listClassName: u.StatefulStream<string>;
    headerFooterTag: u.StatefulStream<string>;
    scrollerRef: u.StatefulStream<(ref: HTMLElement | null) => void>;
    FooterComponent: u.StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    HeaderComponent: u.StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    ListComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children" | "ref" | "className"> & {
        'data-test-id': string;
    } & {
        context?: any;
    }> | null | undefined>;
    ItemComponent: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").GridItemProps & {
        context?: any;
    }> | null | undefined>;
    ScrollerComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children" | "ref" | "tabIndex"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: any;
    }> | null | undefined>;
    ScrollSeekPlaceholder: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").GridScrollSeekPlaceholderProps & {
        context?: any;
    }> | null | undefined>;
}>], ([gridSystem, gridComponentPropsSystem]: [{
    log: u.StatefulStream<Log>;
    logLevel: u.StatefulStream<LogLevel>;
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
    gridState: u.StatefulStream<import("./gridSystem").GridState>;
    totalListHeight: u.StatefulStream<number>;
    isSeeking: u.StatefulStream<boolean>;
    scrollSeekConfiguration: u.StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollSeekRangeChanged: u.Stream<import("./interfaces").ListRange>;
    data: u.StatefulStream<import("./gridSystem").Data>;
    totalCount: u.StatefulStream<number>;
    viewportDimensions: u.StatefulStream<import("./gridSystem").ElementDimensions>;
    itemDimensions: u.StatefulStream<import("./gridSystem").ElementDimensions>;
    scrollTop: u.Stream<number>;
    scrollHeight: u.Stream<number>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    scrollBy: u.Stream<ScrollToOptions>;
    scrollTo: u.Stream<ScrollToOptions>;
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
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
    gap: u.StatefulStream<import("./gridSystem").Gap>;
}, {
    context: u.StatefulStream<unknown>;
    itemContent: u.StatefulStream<GridItemContent<any, any>>;
    components: u.StatefulStream<GridComponents<any>>;
    computeItemKey: u.StatefulStream<GridComputeItemKey<any, any>>;
    itemClassName: u.StatefulStream<string>;
    listClassName: u.StatefulStream<string>;
    headerFooterTag: u.StatefulStream<string>;
    scrollerRef: u.StatefulStream<(ref: HTMLElement | null) => void>;
    FooterComponent: u.StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    HeaderComponent: u.StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    ListComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children" | "ref" | "className"> & {
        'data-test-id': string;
    } & {
        context?: any;
    }> | null | undefined>;
    ItemComponent: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").GridItemProps & {
        context?: any;
    }> | null | undefined>;
    ScrollerComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children" | "ref" | "tabIndex"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: any;
    }> | null | undefined>;
    ScrollSeekPlaceholder: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").GridScrollSeekPlaceholderProps & {
        context?: any;
    }> | null | undefined>;
}]) => {
    context: u.StatefulStream<unknown>;
    itemContent: u.StatefulStream<GridItemContent<any, any>>;
    components: u.StatefulStream<GridComponents<any>>;
    computeItemKey: u.StatefulStream<GridComputeItemKey<any, any>>;
    itemClassName: u.StatefulStream<string>;
    listClassName: u.StatefulStream<string>;
    headerFooterTag: u.StatefulStream<string>;
    scrollerRef: u.StatefulStream<(ref: HTMLElement | null) => void>;
    FooterComponent: u.StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    HeaderComponent: u.StatefulStream<"div" | React.ComponentType<{
        context?: any;
    }> | null | undefined>;
    ListComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children" | "ref" | "className"> & {
        'data-test-id': string;
    } & {
        context?: any;
    }> | null | undefined>;
    ItemComponent: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").GridItemProps & {
        context?: any;
    }> | null | undefined>;
    ScrollerComponent: u.StatefulStream<"div" | React.ComponentType<Pick<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "style" | "children" | "ref" | "tabIndex"> & {
        'data-test-id'?: string | undefined;
        'data-virtuoso-scroller'?: boolean | undefined;
    } & {
        context?: any;
    }> | null | undefined>;
    ScrollSeekPlaceholder: u.StatefulStream<"div" | React.ComponentType<import("./interfaces").GridScrollSeekPlaceholderProps & {
        context?: any;
    }> | null | undefined>;
    log: u.StatefulStream<Log>;
    logLevel: u.StatefulStream<LogLevel>;
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
    gridState: u.StatefulStream<import("./gridSystem").GridState>;
    totalListHeight: u.StatefulStream<number>;
    isSeeking: u.StatefulStream<boolean>;
    scrollSeekConfiguration: u.StatefulStream<false | import("./interfaces").ScrollSeekConfiguration | undefined>;
    scrollSeekRangeChanged: u.Stream<import("./interfaces").ListRange>;
    data: u.StatefulStream<import("./gridSystem").Data>;
    totalCount: u.StatefulStream<number>;
    viewportDimensions: u.StatefulStream<import("./gridSystem").ElementDimensions>;
    itemDimensions: u.StatefulStream<import("./gridSystem").ElementDimensions>;
    scrollTop: u.Stream<number>;
    scrollHeight: u.Stream<number>;
    overscan: u.StatefulStream<import("./sizeRangeSystem").Overscan>;
    scrollBy: u.Stream<ScrollToOptions>;
    scrollTo: u.Stream<ScrollToOptions>;
    scrollToIndex: u.Stream<import("./scrollToIndexSystem").IndexLocation>;
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
    gap: u.StatefulStream<import("./gridSystem").Gap>;
}>, {
    optional: {
        context: "context";
        totalCount: "totalCount";
        overscan: "overscan";
        itemContent: "itemContent";
        components: "components";
        computeItemKey: "computeItemKey";
        data: "data";
        initialItemCount: "initialItemCount";
        scrollSeekConfiguration: "scrollSeekConfiguration";
        headerFooterTag: "headerFooterTag";
        listClassName: "listClassName";
        itemClassName: "itemClassName";
        useWindowScroll: "useWindowScroll";
        customScrollParent: "customScrollParent";
        scrollerRef: "scrollerRef";
    };
    methods: {
        scrollTo: "scrollTo";
        scrollBy: "scrollBy";
        scrollToIndex: "scrollToIndex";
    };
    events: {
        isScrolling: "isScrolling";
        endReached: "endReached";
        startReached: "startReached";
        rangeChanged: "rangeChanged";
        atBottomStateChange: "atBottomStateChange";
        atTopStateChange: "atTopStateChange";
    };
}>>>;
export type GridHandle = RefHandle<typeof Grid>;
export declare const VirtuosoGrid: <ItemData = any, Context = any>(props: VirtuosoGridProps<ItemData, Context> & {
    ref?: React.Ref<VirtuosoGridHandle> | undefined;
}) => React.ReactElement;
export {};
//# sourceMappingURL=VirtuosoGrid.d.ts.map