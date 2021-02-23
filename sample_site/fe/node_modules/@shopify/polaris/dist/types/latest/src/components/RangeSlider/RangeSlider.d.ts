/// <reference types="react" />
import type { RangeSliderProps } from './types';
export type { RangeSliderProps };
interface Props extends RangeSliderProps {
}
export declare function RangeSlider({ min, max, step, value, ...rest }: Props): JSX.Element;
