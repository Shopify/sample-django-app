export interface Range {
    start: Date;
    end: Date;
}
export declare type Week = (Date | null)[];
export declare function getWeeksForMonth(month: number, year: number, weekStartsOn?: number): Week[];
export declare function dateIsInRange(day: Date | null, range: Range): boolean;
export declare function dateIsSelected(day: Date | null, range: Range): boolean;
export declare function isSameDay(day1: Date, day2: Date): boolean;
export declare function getNewRange(range: Range | undefined, selected: Date): Range;
export declare function getNextDisplayMonth(month: number): number;
export declare function getNextDisplayYear(month: number, year: number): number;
export declare function getPreviousDisplayMonth(month: number): number;
export declare function getPreviousDisplayYear(month: number, year: number): number;
export declare function isDateAfter(date: Date, dateToCompare: Date): boolean;
export declare function isDateBefore(date: Date, dateToCompare: Date): boolean;
export declare function getOrderedWeekdays(weekStartsOn: number): number[];
