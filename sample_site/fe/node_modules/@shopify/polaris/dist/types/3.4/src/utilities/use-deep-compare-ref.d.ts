declare type DependencyList = readonly unknown[];
declare type Comparator = (a: DependencyList, b: DependencyList) => boolean;
/**
 * Allows for custom or deep comparison of a dependency list. Useful to keep a consistent dependency
 * list across reference changes.
 * @param dependencies A dependency array similar to React's useEffect / useCallback / useMemo
 * @param comparator An optional function to compare dependencies that'll default to a deep comparison
 * @returns A dependency list
 * @see {@link https://github.com/Shopify/polaris-react/blob/main/src/utilities/use-deep-effect.tsx}
 * @see {@link https://github.com/Shopify/polaris-react/blob/main/src/utilities/use-deep-callback.tsx}
 * @example
 * function useDeepEffectExample(callback, dependencies, customCompare) {
 *  useEffect(callback, useDeepCompareRef(dependencies, customCompare));
 * }
 */
export declare function useDeepCompareRef(dependencies: DependencyList, comparator?: Comparator): DependencyList;
export {};
