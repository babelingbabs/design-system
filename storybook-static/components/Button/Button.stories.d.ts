import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

/**
 * # Button
 * Four variants. Three sizes. Clean states. No decoration.
 *
 * Buttons use `framer-motion` for a subtle press (scale 0.97) that gives
 * physicality without being cartoonish.
 */
declare const meta: Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof Button>;
export declare const Default: Story;
export declare const Variants: Story;
export declare const Sizes: Story;
export declare const States: Story;
export declare const WithIcons: Story;
export declare const Matrix: Story;
