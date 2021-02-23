/// <reference types="react" />
export interface CheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    active?: boolean;
    id?: string;
    name?: string;
    value?: string;
    role?: string;
    onChange(): void;
}
export declare function Checkbox({ id: idProp, checked, disabled, active, onChange, name, value, role, }: CheckboxProps): JSX.Element;
