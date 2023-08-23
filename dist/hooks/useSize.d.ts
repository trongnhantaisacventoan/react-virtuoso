import React from 'react';
export type CallbackRefParam = HTMLElement | null;
export declare function useSizeWithElRef(callback: (e: HTMLElement) => void, enabled?: boolean): {
    ref: React.MutableRefObject<CallbackRefParam>;
    callbackRef: (_el: CallbackRefParam) => void;
};
export default function useSize(callback: (e: HTMLElement) => void, enabled?: boolean): (_el: CallbackRefParam) => void;
//# sourceMappingURL=useSize.d.ts.map