/// <reference types="react" />
import { BadgeProps } from '../../../../../Badge';
export interface MessageProps {
    title: string;
    description: string;
    action: {
        onClick(): void;
        content: string;
    };
    link: {
        to: string;
        content: string;
    };
    badge?: {
        content: string;
        status: BadgeProps['status'];
    };
}
export declare function Message({ title, description, action, link, badge, }: MessageProps): JSX.Element;
