import { ScrollContainerState } from '../../interfaces';
type CallbackRefParam = HTMLElement | null;
export default function useSize(callback: (state: ScrollContainerState) => void): {
    scrollerRef: (elRef: CallbackRefParam) => void;
    scrollByCallback: () => void;
    scrollToCallback: () => void;
};
export {};
//# sourceMappingURL=useScrollTop.d.ts.map