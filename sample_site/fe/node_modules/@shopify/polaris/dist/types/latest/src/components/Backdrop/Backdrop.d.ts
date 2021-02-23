/// <reference types="react" />
export interface BackdropProps {
    belowNavigation?: boolean;
    transparent?: boolean;
    onClick?(): void;
    onTouchStart?(): void;
}
export declare function Backdrop(props: BackdropProps): JSX.Element;
