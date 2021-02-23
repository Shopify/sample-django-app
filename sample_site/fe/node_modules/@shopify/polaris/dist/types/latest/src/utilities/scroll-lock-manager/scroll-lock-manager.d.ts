export declare const SCROLL_LOCKING_ATTRIBUTE = "data-lock-scrolling";
export declare class ScrollLockManager {
    private scrollLocks;
    private locked;
    registerScrollLock(): void;
    unregisterScrollLock(): void;
    handleScrollLocking(): void;
    resetScrollPosition(): void;
}
