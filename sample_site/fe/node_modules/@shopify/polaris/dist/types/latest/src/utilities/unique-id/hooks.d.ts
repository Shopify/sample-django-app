/**
 * Returns a unique id that remains consistent across multiple re-renders of the
 * same hook
 * @param prefix Defines a prefix for the ID. You probably want to set this to
 *   the name of the component you're calling `useUniqueId` in.
 * @param overrideId Defines a fixed value to use instead of generating a unique
 *   ID. Useful for components that allow consumers to specify their own ID.
 */
export declare function useUniqueId(prefix?: string, overrideId?: string): string;
