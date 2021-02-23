import React, { Component } from 'react';
import { FeaturesContext } from '../../../../utilities/features';
import type { RangeSliderProps, DualValue } from '../../types';
interface State {
    value: DualValue;
    trackWidth: number;
    trackLeft: number;
    prevValue?: DualValue;
}
export interface DualThumbProps extends RangeSliderProps {
    value: DualValue;
    id: string;
    min: number;
    max: number;
    step: number;
}
export declare class DualThumb extends Component<DualThumbProps, State> {
    static contextType: React.Context<import("../../../../utilities/features").Features | undefined>;
    static getDerivedStateFromProps(props: DualThumbProps, state: State): {
        prevValue: DualValue;
        value: DualValue;
    } | null;
    context: React.ContextType<typeof FeaturesContext>;
    state: State;
    private track;
    private trackWrapper;
    private thumbLower;
    private thumbUpper;
    private setTrackPosition;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private handleMouseDownThumbLower;
    private handleMouseMoveThumbLower;
    private handleTouchStartThumbLower;
    private handleTouchMoveThumbLower;
    private handleMouseDownThumbUpper;
    private handleMouseMoveThumbUpper;
    private handleTouchStartThumbUpper;
    private handleTouchMoveThumbUpper;
    private handleKeypressLower;
    private handleKeypressUpper;
    private incrementValueLower;
    private decrementValueLower;
    private incrementValueUpper;
    private decrementValueUpper;
    private dispatchValue;
    private setValue;
    private handleMouseDownTrack;
    private handleTouchStartTrack;
    private actualXPosition;
}
export {};
