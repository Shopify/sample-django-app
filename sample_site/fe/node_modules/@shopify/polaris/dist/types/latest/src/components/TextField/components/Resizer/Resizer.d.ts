/// <reference types="react" />
export interface ResizerProps {
    contents?: string;
    currentHeight?: number | null;
    minimumLines?: number;
    onHeightChange(height: number): void;
}
export declare function Resizer({ contents, currentHeight: currentHeightProp, minimumLines, onHeightChange, }: ResizerProps): JSX.Element;
