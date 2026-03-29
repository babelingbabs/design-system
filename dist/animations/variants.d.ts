import { Variants } from 'framer-motion';

/**
 * Reusable Framer Motion animation variants.
 * Tuned for the architectural vibe: precise, not bouncy.
 */
export declare const fadeIn: Variants;
export declare const fadeOut: Variants;
export declare const slideUp: Variants;
export declare const slideDown: Variants;
export declare const slideLeft: Variants;
export declare const slideRight: Variants;
export declare const scaleIn: Variants;
export declare const scaleOut: Variants;
/** For list items — parent sets staggerChildren, children use this */
export declare const staggerChildren: Variants;
export declare const staggerItem: Variants;
/** Subtle card hover lift */
export declare const cardHover: {
    rest: {
        y: number;
        boxShadow: string;
        transition: {
            duration: number;
            ease: string;
        };
    };
    hover: {
        y: number;
        boxShadow: string;
        transition: {
            duration: number;
            ease: string;
        };
    };
};
/** Interactive element hover lift — alias for cardHover */
export declare const hoverLift: {
    rest: {
        y: number;
        boxShadow: string;
        transition: {
            duration: number;
            ease: string;
        };
    };
    hover: {
        y: number;
        boxShadow: string;
        transition: {
            duration: number;
            ease: string;
        };
    };
};
/** Button press */
export declare const buttonTap: {
    tap: {
        scale: number;
    };
};
/** Smooth input focus transition */
export declare const inputFocus: {
    rest: {
        boxShadow: string;
        borderColor: string;
        transition: {
            duration: number;
        };
    };
    focus: {
        boxShadow: string;
        borderColor: string;
        transition: {
            duration: number;
        };
    };
};
/** Page transition */
export declare const pageTransition: Variants;
