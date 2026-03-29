import { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

/**
 * # Card
 * A clean container. Four variants, composable sections.
 *
 * The `interactive` prop enables the hover lift animation via Framer Motion —
 * a 2px vertical lift with a deeper shadow. Subtle but physical.
 */
declare const meta: Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof Card>;
export declare const Default: Story;
export declare const Variants: Story;
export declare const WithSections: Story;
export declare const Interactive: Story;
export declare const MetricCards: Story;
