/**
 * Color tokens
 * Light mode primary. Dark mode inverts elegantly.
 * Architectural palette: off-whites, near-blacks, muted accent.
 */
export declare const colors: {
    readonly background: {
        readonly base: "#FAFAFA";
        readonly subtle: "#F5F5F5";
        readonly muted: "#EFEFEF";
        readonly inverse: "#1A1A1A";
    };
    readonly foreground: {
        readonly primary: "#1A1A1A";
        readonly secondary: "#555555";
        readonly tertiary: "#8A8A8A";
        readonly disabled: "#BBBBBB";
        readonly inverse: "#FAFAFA";
    };
    readonly border: {
        readonly subtle: "#E8E8E8";
        readonly default: "#D4D4D4";
        readonly strong: "#AAAAAA";
    };
    readonly accent: {
        readonly 50: "#F0F4F8";
        readonly 100: "#D9E4EE";
        readonly 200: "#B3C9DD";
        readonly 300: "#8DAECC";
        readonly 400: "#6793BB";
        readonly 500: "#4A7BA7";
        readonly 600: "#3B6286";
        readonly 700: "#2C4A65";
        readonly 800: "#1E3144";
        readonly 900: "#0F1922";
    };
    readonly semantic: {
        readonly success: "#2D6A4F";
        readonly successBg: "#D8F3DC";
        readonly warning: "#7B5800";
        readonly warningBg: "#FFF3CD";
        readonly error: "#9B1D20";
        readonly errorBg: "#FCDCDC";
        readonly info: "#1A4A6E";
        readonly infoBg: "#D6EAF8";
    };
};
export type ColorToken = typeof colors;
