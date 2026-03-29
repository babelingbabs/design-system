import { default as React } from 'react';

export interface GridProps {
    children: React.ReactNode;
    cols?: 1 | 2 | 3 | 4 | 6 | 8 | 12;
    gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}
export declare function Grid({ children, cols, gap, className }: GridProps): import("react/jsx-runtime").JSX.Element;
export interface GridItemProps {
    children: React.ReactNode;
    span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    className?: string;
}
export declare function GridItem({ children, span, className }: GridItemProps): import("react/jsx-runtime").JSX.Element;
export interface GridOverlayProps {
    /** Whether the overlay is visible */
    visible?: boolean;
    /** Number of columns */
    columns?: number;
    /** Column color */
    color?: string;
    /** Base unit in px for dot grid */
    unit?: number;
}
export declare function GridOverlay({ visible, columns, color, unit, }: GridOverlayProps): import("react/jsx-runtime").JSX.Element;
export interface StackProps {
    children: React.ReactNode;
    direction?: 'row' | 'col';
    gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    align?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around';
    wrap?: boolean;
    className?: string;
}
export declare function Stack({ children, direction, gap, align, justify, wrap, className, }: StackProps): import("react/jsx-runtime").JSX.Element;
