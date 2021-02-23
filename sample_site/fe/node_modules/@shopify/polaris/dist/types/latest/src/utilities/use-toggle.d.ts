/**
 * Returns a stateful value, and a set of memoized functions to toggle it,
 * set it to true and set it to false
 */
export declare function useToggle(initialState: boolean): {
    value: boolean;
    toggle: () => void;
    setTrue: () => void;
    setFalse: () => void;
};
