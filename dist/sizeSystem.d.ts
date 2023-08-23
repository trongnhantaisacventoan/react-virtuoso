import * as u from './urx';
import { AANode } from './AATree';
import { Log, LogLevel } from './loggerSystem';
import { SizeFunction } from './interfaces';
export interface SizeRange {
    startIndex: number;
    endIndex: number;
    size: number;
}
export type Data = readonly unknown[] | undefined;
export declare function insertRanges(sizeTree: AANode<number>, ranges: SizeRange[]): readonly [AANode<number>, number];
export interface OffsetPoint {
    offset: number;
    size: number;
    index: number;
}
export interface SizeState {
    sizeTree: AANode<number>;
    offsetTree: Array<OffsetPoint>;
    groupOffsetTree: AANode<number>;
    lastIndex: number;
    lastOffset: number;
    lastSize: number;
    groupIndices: number[];
}
export declare function initialSizeState(): SizeState;
export declare function indexComparator({ index: itemIndex }: OffsetPoint, index: number): 0 | 1 | -1;
export declare function offsetComparator({ offset: itemOffset }: OffsetPoint, offset: number): 0 | 1 | -1;
export declare function rangesWithinOffsets(tree: Array<OffsetPoint>, startOffset: number, endOffset: number, minStartIndex?: number): Array<{
    start: number;
    end: number;
    value: {
        size: number;
        offset: number;
        index: number;
    };
}>;
export declare function sizeStateReducer(state: SizeState, [ranges, groupIndices, log, gap]: [SizeRange[], number[], Log, number]): SizeState;
export declare function offsetOf(index: number, tree: Array<OffsetPoint>, gap: number): number;
export type FlatOrGroupedLocation = {
    index: number | 'LAST';
} | {
    groupIndex: number;
};
export declare function isGroupLocation(location: FlatOrGroupedLocation): location is {
    groupIndex: number;
};
export declare function originalIndexFromLocation(location: FlatOrGroupedLocation, sizes: SizeState, lastIndex: number): number;
export declare function originalIndexFromItemIndex(itemIndex: number, sizes: SizeState): number;
export declare function hasGroups(sizes: SizeState): boolean;
type OptionalNumber = number | undefined;
export declare const sizeSystem: u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<Log>;
    logLevel: u.StatefulStream<LogLevel>;
}>, u.SystemSpec<never[], () => {
    recalcInProgress: u.StatefulStream<boolean>;
}>], ([{ log }, { recalcInProgress }]: [{
    log: u.StatefulStream<Log>;
    logLevel: u.StatefulStream<LogLevel>;
}, {
    recalcInProgress: u.StatefulStream<boolean>;
}]) => {
    data: u.StatefulStream<Data>;
    totalCount: u.Stream<number>;
    sizeRanges: u.Stream<SizeRange[]>;
    groupIndices: u.StatefulStream<number[]>;
    defaultItemSize: u.StatefulStream<OptionalNumber>;
    fixedItemSize: u.StatefulStream<OptionalNumber>;
    unshiftWith: u.Stream<number>;
    shiftWith: u.Stream<number>;
    shiftWithOffset: u.Stream<number>;
    beforeUnshiftWith: u.Stream<number>;
    firstItemIndex: u.StatefulStream<number>;
    gap: u.StatefulStream<number>;
    sizes: u.StatefulStream<SizeState>;
    listRefresh: u.Stream<boolean>;
    statefulTotalCount: u.StatefulStream<number>;
    trackItemSizes: u.StatefulStream<boolean>;
    itemSize: u.StatefulStream<SizeFunction>;
}>;
export {};
//# sourceMappingURL=sizeSystem.d.ts.map