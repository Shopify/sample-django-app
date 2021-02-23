import React from 'react';
declare type DateOptionType = 'past' | 'future' | 'full';
export interface DateSelectorProps {
    dateOptionType?: DateOptionType;
    filterValue?: string;
    filterKey?: string;
    filterMinKey: string;
    filterMaxKey: string;
    onFilterValueChange(filterValue?: string): void;
    onFilterKeyChange(filterKey?: string): void;
}
export declare enum DateFilterOption {
    PastWeek = "past_week",
    PastMonth = "past_month",
    PastQuarter = "past_quarter",
    PastYear = "past_year",
    ComingWeek = "coming_week",
    ComingMonth = "coming_month",
    ComingQuarter = "coming_quarter",
    ComingYear = "coming_year",
    OnOrBefore = "on_or_before",
    OnOrAfter = "on_or_after"
}
export declare const DateSelector: React.NamedExoticComponent<DateSelectorProps>;
export {};
