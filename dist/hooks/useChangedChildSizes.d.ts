import React from 'react';
import { Log } from '../loggerSystem';
import { SizeRange } from '../sizeSystem';
import { SizeFunction, ScrollContainerState } from '../interfaces';
export default function useChangedListContentsSizes(callback: (ranges: SizeRange[]) => void, itemSize: SizeFunction, enabled: boolean, scrollContainerStateCallback: (state: ScrollContainerState) => void, log: Log, gap?: (gap: number) => void, customScrollParent?: HTMLElement): {
    ref: React.MutableRefObject<import("./useSize").CallbackRefParam>;
    callbackRef: (_el: import("./useSize").CallbackRefParam) => void;
};
//# sourceMappingURL=useChangedChildSizes.d.ts.map