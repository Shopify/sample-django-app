/// <reference types="react" />
import { DisableableAction } from '../../../../types';
export declare type BulkActionButtonProps = {
    disclosure?: boolean;
    indicator?: boolean;
    handleMeasurement?(width: number): void;
} & DisableableAction;
export declare function BulkActionButton({ handleMeasurement, url, external, onAction, content, disclosure, accessibilityLabel, disabled, indicator, }: BulkActionButtonProps): JSX.Element;
