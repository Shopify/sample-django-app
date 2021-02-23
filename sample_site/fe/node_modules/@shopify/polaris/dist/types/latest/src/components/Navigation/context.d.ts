/// <reference types="react" />
interface NavigationContextType {
    location: string;
    onNavigationDismiss?(): void;
    withinContentContainer?: boolean;
}
export declare const NavigationContext: import("react").Context<NavigationContextType>;
export {};
