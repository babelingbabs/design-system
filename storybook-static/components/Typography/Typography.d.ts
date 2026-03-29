import { default as React } from '../../../node_modules/react';

interface TypographyProps {
    children: React.ReactNode;
    className?: string;
}
export declare const H1: {
    ({ children, className }: TypographyProps): React.DetailedReactHTMLElement<{
        className: string;
    }, HTMLElement>;
    displayName: string;
};
export declare const H2: {
    ({ children, className }: TypographyProps): React.DetailedReactHTMLElement<{
        className: string;
    }, HTMLElement>;
    displayName: string;
};
export declare const H3: {
    ({ children, className }: TypographyProps): React.DetailedReactHTMLElement<{
        className: string;
    }, HTMLElement>;
    displayName: string;
};
export declare const H4: {
    ({ children, className }: TypographyProps): React.DetailedReactHTMLElement<{
        className: string;
    }, HTMLElement>;
    displayName: string;
};
export declare const H5: {
    ({ children, className }: TypographyProps): React.DetailedReactHTMLElement<{
        className: string;
    }, HTMLElement>;
    displayName: string;
};
export declare const H6: {
    ({ children, className }: TypographyProps): React.DetailedReactHTMLElement<{
        className: string;
    }, HTMLElement>;
    displayName: string;
};
interface TextProps extends TypographyProps {
    size?: 'lg' | 'base' | 'sm' | 'xs';
    secondary?: boolean;
    muted?: boolean;
}
export declare function Text({ children, size, secondary, muted, className, }: TextProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Text {
    var displayName: string;
}
interface CaptionProps extends TypographyProps {
    muted?: boolean;
}
export declare function Caption({ children, muted, className }: CaptionProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Caption {
    var displayName: string;
}
interface MonoProps extends TypographyProps {
    size?: 'sm' | 'xs' | '2xs';
    accent?: boolean;
}
export declare function Mono({ children, size, accent, className }: MonoProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Mono {
    var displayName: string;
}
interface LabelProps extends TypographyProps {
    htmlFor?: string;
    required?: boolean;
}
export declare function Label({ children, htmlFor, required, className }: LabelProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Label {
    var displayName: string;
}
export declare function Lead({ children, className }: TypographyProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Lead {
    var displayName: string;
}
export {};
