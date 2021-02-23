/// <reference types="react" />
import type { Error } from '../../types';
export interface InlineErrorProps {
    /** Content briefly explaining how to resolve the invalid form field input. */
    message: Error;
    /** Unique identifier of the invalid form field that the message describes */
    fieldID: string;
}
export declare function InlineError({ message, fieldID }: InlineErrorProps): JSX.Element | null;
export declare function errorTextID(id: string): string;
