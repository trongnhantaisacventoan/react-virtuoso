import { SizeRange } from '../../sizeSystem';
type CallbackRefParam = HTMLElement | null;
export default function useChangedChildSizes(callback: (sizes: SizeRange[]) => void): {
    callbackRef: (elRef: CallbackRefParam) => void;
};
export {};
//# sourceMappingURL=useChangedChildSizes.d.ts.map