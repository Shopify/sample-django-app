/// <reference types="react" />
import { Range } from '../../utilities/dates';
export { Range };
export interface DatePickerProps {
    /** ID for the element */
    id?: string;
    /** The selected date or range of dates */
    selected?: Date | Range;
    /** The month to show, from 0 to 11. 0 is January, 1 is February ... 11 is December */
    month: number;
    /** The year to show */
    year: number;
    /** Allow a range of dates to be selected */
    allowRange?: boolean;
    /** Disable selecting dates before this. */
    disableDatesBefore?: Date;
    /** Disable selecting dates after this. */
    disableDatesAfter?: Date;
    /** The selection can span multiple months */
    multiMonth?: boolean;
    /**
     * First day of week, from 0 to 6. 0 is Sunday, 1 is Monday ... 6 is Saturday
     * @default 0
     */
    weekStartsOn?: number;
    /** Visually hidden prefix text for selected days on single selection date pickers */
    dayAccessibilityLabelPrefix?: string;
    /** Callback when date is selected. */
    onChange?(date: Range): void;
    /** Callback when month is changed. */
    onMonthChange?(month: number, year: number): void;
}
export declare function DatePicker({ id, selected, month, year, allowRange, multiMonth, disableDatesBefore, disableDatesAfter, weekStartsOn, dayAccessibilityLabelPrefix, onMonthChange, onChange, }: DatePickerProps): JSX.Element;
