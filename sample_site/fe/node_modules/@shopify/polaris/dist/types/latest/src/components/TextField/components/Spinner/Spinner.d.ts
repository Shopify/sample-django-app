/// <reference types="react" />
declare type HandleStepFn = (step: number) => void;
export interface SpinnerProps {
    onChange: HandleStepFn;
    onClick?(): void;
    onMouseDown(onChange: HandleStepFn): void;
    onMouseUp(): void;
}
export declare function Spinner({ onChange, onClick, onMouseDown, onMouseUp, }: SpinnerProps): JSX.Element;
export {};
