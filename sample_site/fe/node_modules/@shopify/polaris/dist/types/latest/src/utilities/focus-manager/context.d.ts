/// <reference types="react" />
export interface FocusManagerContextType {
    trapFocusList: string[];
    add: (id: string) => void;
    remove: (id: string) => boolean;
}
export declare const FocusManagerContext: import("react").Context<FocusManagerContextType | undefined>;
