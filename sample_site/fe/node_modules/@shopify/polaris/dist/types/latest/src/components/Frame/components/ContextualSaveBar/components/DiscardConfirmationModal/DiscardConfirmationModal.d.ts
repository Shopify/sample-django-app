/// <reference types="react" />
export interface DiscardConfirmationModalProps {
    open: boolean;
    onDiscard(): void;
    onCancel(): void;
}
export declare function DiscardConfirmationModal({ open, onDiscard, onCancel, }: DiscardConfirmationModalProps): JSX.Element;
