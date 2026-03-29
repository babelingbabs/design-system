import { default as React } from '../../../node_modules/react';

export type CardVariant = 'default' | 'outlined' | 'elevated' | 'ghost';
export interface CardProps {
    children: React.ReactNode;
    variant?: CardVariant;
    /** Enables hover lift animation */
    interactive?: boolean;
    /** Remove default padding */
    noPadding?: boolean;
    className?: string;
    onClick?: () => void;
}
export interface CardSectionProps {
    children: React.ReactNode;
    className?: string;
}
export declare function Card({ children, variant, interactive, noPadding, className, onClick, }: CardProps): import("react/jsx-runtime").JSX.Element;
export declare function CardHeader({ children, className }: CardSectionProps): import("react/jsx-runtime").JSX.Element;
export declare namespace CardHeader {
    var displayName: string;
}
export declare function CardBody({ children, className }: CardSectionProps): import("react/jsx-runtime").JSX.Element;
export declare namespace CardBody {
    var displayName: string;
}
export declare function CardFooter({ children, className }: CardSectionProps): import("react/jsx-runtime").JSX.Element;
export declare namespace CardFooter {
    var displayName: string;
}
