import { default as React } from '../../../node_modules/react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    /** Icon-only button — renders square, hides label from layout */
    iconOnly?: boolean;
    /** Leading icon */
    icon?: React.ReactNode;
    /** Trailing icon */
    trailingIcon?: React.ReactNode;
    loading?: boolean;
    children?: React.ReactNode;
}
export declare function Button({ variant, size, iconOnly, icon, trailingIcon, loading, disabled, children, className, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
