/// <reference types="react" />
import { Range } from '../../../../utilities/dates';
export interface MonthProps {
    focusedDate?: Date;
    selected?: Range;
    hoverDate?: Date;
    month: number;
    year: number;
    disableDatesBefore?: Date;
    disableDatesAfter?: Date;
    allowRange?: boolean;
    weekStartsOn: number;
    accessibilityLabelPrefixes: [
        string | undefined,
        string
    ];
    onChange?(date: Range): void;
    onHover?(hoverEnd: Date): void;
    onFocus?(date: Date): void;
}
export declare function Month({ focusedDate, selected, hoverDate, disableDatesBefore, disableDatesAfter, allowRange, onChange, onHover, onFocus, month, year, weekStartsOn, accessibilityLabelPrefixes, }: MonthProps): JSX.Element;
