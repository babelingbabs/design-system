import { default as React } from 'react';

interface TypographyProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export declare const H1: {
    ({ children, className, style }: TypographyProps): React.DetailedReactHTMLElement<{
        className: string;
        style: React.CSSProperties | undefined;
    }, HTMLElement>;
    displayName: string;
};
export declare const H2: {
    ({ children, className, style }: TypographyProps): React.DetailedReactHTMLElement<{
        className: string;
        style: React.CSSProperties | undefined;
    }, HTMLElement>;
    displayName: string;
};
export declare const H3: {
    ({ children, className, style }: TypographyProps): React.DetailedReactHTMLElement<{
        className: string;
        style: React.CSSProperties | undefined;
    }, HTMLElement>;
    displayName: string;
};
export declare const H4: {
    ({ children, className, style }: TypographyProps): React.DetailedReactHTMLElement<{
        className: string;
        style: React.CSSProperties | undefined;
    }, HTMLElement>;
    displayName: string;
};
export declare const H5: {
    ({ children, className, style }: TypographyProps): React.DetailedReactHTMLElement<{
        className: string;
        style: React.CSSProperties | undefined;
    }, HTMLElement>;
    displayName: string;
};
export declare const H6: {
    ({ children, className, style }: TypographyProps): React.DetailedReactHTMLElement<{
        className: string;
        style: React.CSSProperties | undefined;
    }, HTMLElement>;
    displayName: string;
};
interface TextProps extends TypographyProps {
    size?: 'lg' | 'base' | 'sm' | 'xs';
    secondary?: boolean;
    muted?: boolean;
}
export declare function Text({ children, size, secondary, muted, className, style, }: TextProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Text {
    var displayName: string;
}
interface CaptionProps extends TypographyProps {
    muted?: boolean;
}
export declare function Caption({ children, muted, className, style }: CaptionProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Caption {
    var displayName: string;
}
interface MonoProps extends TypographyProps {
    size?: 'sm' | 'xs' | '2xs';
    accent?: boolean;
}
export declare function Mono({ children, size, accent, className, style }: MonoProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Mono {
    var displayName: string;
}
interface LabelProps extends TypographyProps {
    htmlFor?: string;
    required?: boolean;
}
export declare function Label({ children, htmlFor, required, className, style }: LabelProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Label {
    var displayName: string;
}
export declare function Lead({ children, className, style }: TypographyProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Lead {
    var displayName: string;
}
export {};
