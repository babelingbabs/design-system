import { default as React } from '../../../node_modules/react';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputState = 'default' | 'error' | 'success';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
    label?: string;
    hint?: string;
    errorMessage?: string;
    successMessage?: string;
    inputState?: InputState;
    size?: InputSize;
    /** Leading icon or adornment */
    prefix?: React.ReactNode;
    /** Trailing icon or adornment */
    suffix?: React.ReactNode;
    /** Full width */
    fullWidth?: boolean;
}
export declare function Input({ label, hint, errorMessage, successMessage, inputState, size, prefix, suffix, fullWidth, id: externalId, className, disabled, ...props }: InputProps): import("react/jsx-runtime").JSX.Element;
