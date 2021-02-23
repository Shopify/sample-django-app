/// <reference types="react" />
import type { ButtonProps } from '../../../Button';
interface SecondaryAction extends ButtonProps {
    onAction?(): void;
    getOffsetWidth?(width: number): void;
}
export declare function SecondaryAction({ children, onAction, getOffsetWidth, ...rest }: SecondaryAction): JSX.Element;
export {};
