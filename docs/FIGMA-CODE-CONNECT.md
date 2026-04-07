# Figma Code Connect

Wires Figma component variants to their `@kingsley/design-system` React implementations so Figma's Dev Mode shows production-ready code snippets.

## Setup

```bash
# Install (already done)
npm install --save-dev @figma/code-connect --legacy-peer-deps

# Publish connections to Figma
npm run figma:connect
```

`figma:connect` runs `npx figma connect publish`, which reads `figma.config.json` and uploads all `figma-connect/**/*.figma.tsx` files to Figma.

## Files

| File | Component | Figma variants mapped |
|------|-----------|----------------------|
| `figma-connect/Button.figma.tsx` | `Button` | Variant, Size, Loading, Disabled, Icon Only |
| `figma-connect/Card.figma.tsx` | `Card` | Variant, Interactive, No Padding |
| `figma-connect/Input.figma.tsx` | `Input` | Size, Placeholder, Label, Disabled, Error, Hint |
| `figma-connect/Badge.figma.tsx` | `Badge` | Variant, Size, Dot |
| `figma-connect/Toggle.figma.tsx` | `Toggle` | Checked, Disabled, Size, Label |
| `figma-connect/Tabs.figma.tsx` | `Tabs` | Variant, Size |
| `figma-connect/Modal.figma.tsx` | `Modal` | Size, Open |
| `figma-connect/Avatar.figma.tsx` | `Avatar` | Size, Shape, Status, Image URL, Name |
| `figma-connect/Toast.figma.tsx` | `ToastProvider` | Position |
| `figma-connect/Tooltip.figma.tsx` | `Tooltip` | Position, Content, Disabled |
| `figma-connect/Select.figma.tsx` | `Select` | Size, Placeholder, Disabled, Multiple, Searchable |

## Configuration (`figma.config.json`)

```json
{
  "codeConnect": {
    "include": ["figma-connect/**/*.figma.tsx"],
    "parser": "react",
    "importPaths": {
      "../src/components/*": "@kingsley/design-system"
    }
  }
}
```

`importPaths` rewrites local `../src/components/*` imports to the published package path `@kingsley/design-system` in the generated code snippets, so Figma shows correct consumer-facing imports.

## Updating Figma URLs

Each `.figma.tsx` file contains a placeholder Figma node URL:

```
https://www.figma.com/design/PLACEHOLDER/Kingsley-DS?node-id=component-name
```

Replace `PLACEHOLDER` with your actual Figma file key and set the correct `node-id` for each component frame. You can find node IDs by right-clicking a component in Figma → Copy link.

## Adding a New Component

1. Create `figma-connect/MyComponent.figma.tsx`:

```tsx
import figma from '@figma/code-connect'
import { MyComponent } from '../src/components/MyComponent'

figma.connect(MyComponent, 'https://www.figma.com/design/YOUR_FILE_KEY/...?node-id=...', {
  props: {
    variant: figma.enum('Variant', {
      'Option A': 'a',
      'Option B': 'b',
    }),
    disabled: figma.boolean('Disabled'),
  },
  example: ({ variant, disabled }) => (
    <MyComponent variant={variant} disabled={disabled} />
  ),
})
```

2. Run `npm run figma:connect` to publish.

## Authentication

`figma connect publish` requires a Figma Personal Access Token. Set it before running:

```bash
export FIGMA_ACCESS_TOKEN=your_token_here
npm run figma:connect
```

Or pass it inline:

```bash
FIGMA_ACCESS_TOKEN=your_token_here npm run figma:connect
```

Tokens can be created at: Figma → Account Settings → Personal access tokens.
