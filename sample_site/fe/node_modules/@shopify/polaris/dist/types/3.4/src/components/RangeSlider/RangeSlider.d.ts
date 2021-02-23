/// <reference types="react" />
import { RangeSliderProps } from './types';
export { RangeSliderProps };
interface Props extends RangeSliderProps {
}
export declare function RangeSlider({ min, max, step, value, ...rest }: Props): JSX.Element;
