import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

/**
 * # Input
 * Minimal. Precise. The border animates to accent color on focus,
 * a focus ring provides a clear accessibility indicator.
 *
 * States: default, focus (CSS), error, success, disabled.
 */
declare const meta: Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof Input>;
export declare const Default: Story;
export declare const Sizes: Story;
export declare const States: Story;
export declare const WithAdornments: Story;
export declare const FormExample: Story;
