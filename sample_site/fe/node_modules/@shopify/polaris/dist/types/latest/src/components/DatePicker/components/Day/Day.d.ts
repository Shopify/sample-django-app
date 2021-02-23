import React from 'react';
export interface DayProps {
    focused?: boolean;
    day?: Date;
    selected?: boolean;
    inRange?: boolean;
    inHoveringRange?: boolean;
    disabled?: boolean;
    lastDayOfMonth?: any;
    isLastSelectedDay?: boolean;
    isFirstSelectedDay?: boolean;
    isHoveringRight?: boolean;
    rangeIsDifferent?: boolean;
    weekday?: string;
    selectedAccessibilityLabelPrefix?: string;
    onClick?(day: Date): void;
    onHover?(day?: Date): void;
    onFocus?(day: Date): void;
}
export declare const Day: React.NamedExoticComponent<DayProps>;
