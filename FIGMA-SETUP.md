# Figma ↔ Code Pipeline Setup

## Architecture

```
Figma Variables → Tokens Studio plugin → Git (tokens/*.json)
                                              ↓
                                     Style Dictionary
                                              ↓
                              CSS Variables + TypeScript constants
                                              ↓
                                    React Components + Storybook
```

## Step 1: Install Tokens Studio (Figma Plugin)

1. Open Figma → Resources (Shift+I) → Plugins → Search "**Tokens Studio for Figma**"
2. Install it (it's free for personal use)
3. Open the plugin: Resources → Tokens Studio

## Step 2: Set Up Git Sync

This connects your Figma tokens directly to this repo so changes flow both ways.

1. In Tokens Studio plugin → Settings (gear icon)
2. **Add new sync provider** → Choose **GitHub**
3. Fill in:
   - **Personal Access Token**: Generate one at https://github.com/settings/tokens (needs `repo` scope)
   - **Repository**: `<your-github-username>/design-system`
   - **Branch**: `main`
   - **Token file path**: `tokens/figma/tokens.json` (Tokens Studio will create this)
4. Click **Save**

Now tokens flow: Figma → GitHub → Your local repo.

## Step 3: Create Variables in Figma

Set up your Figma file with Variables that match our token structure:

### Color Variables (create a "Color" collection)
- `bg/base` → #FAFAFA
- `bg/subtle` → #F5F5F5
- `bg/muted` → #EFEFEF
- `bg/inverse` → #1A1A1A
- `fg/primary` → #1A1A1A
- `fg/secondary` → #555555
- `fg/tertiary` → #8A8A8A
- `fg/disabled` → #BBBBBB
- `fg/inverse` → #FAFAFA
- `border/subtle` → #E8E8E8
- `border/default` → #D4D4D4
- `border/strong` → #AAAAAA
- `accent/500` → #4A7BA7 (and the full 50-900 scale)

### Add a "Dark" mode
- In Variables panel → add a Mode called "Dark"
- Fill in dark values from `tokens/base/color-dark.json`

### Spacing Variables (create "Spacing" collection)
- `spacing/1` → 4
- `spacing/2` → 8
- `spacing/3` → 12
- `spacing/4` → 16
- `spacing/6` → 24
- `spacing/8` → 32

### Typography Variables (create "Typography" collection)
- `font/family/sans` → Inter
- `font/family/mono` → JetBrains Mono
- `text/body` → 17
- `text/headline` → 17
- `text/title1` → 28
- (etc — full scale in tokens/base/typography.json)

### Radius Variables (create "Radius" collection)
- `radius/xs` → 2
- `radius/sm` → 4
- `radius/md` → 6
- `radius/lg` → 8
- `radius/xl` → 12

## Step 4: Link Tokens Studio to Variables

1. In Tokens Studio → Import → **Figma Variables**
2. This pulls your Figma Variables into Tokens Studio's format
3. Push to GitHub → tokens arrive in your repo as JSON
4. Run `npm run tokens` locally to regenerate CSS/TS from the JSON

## Step 5: Ongoing Workflow

### Design changes:
1. Update Variable value in Figma
2. Tokens Studio auto-detects the change
3. Push to GitHub from Tokens Studio
4. Pull locally → `npm run tokens` → CSS/TS regenerated
5. Components automatically use new values

### Code changes:
1. Edit `tokens/base/*.json` directly
2. Run `npm run tokens`
3. Import changes into Tokens Studio → push to Figma Variables
4. Designers see updated values

## Step 6: Figma Code-to-Canvas (Bonus)

Use Figma's built-in Code-to-Canvas feature to validate components:

1. Copy a React component's source code (e.g., Button.tsx)
2. In Figma → paste into Code-to-Canvas
3. Figma generates an editable visual component
4. Compare against your Figma component → catch discrepancies

## Commands

```bash
# Build tokens from JSON → CSS + TypeScript
npm run tokens

# Full build (tokens + TypeScript + Vite)
npm run build

# Run Storybook
npm run storybook
```

## File Structure

```
tokens/
  base/              ← W3C DTCG format (source of truth for code)
    color.json       ← Light theme colors
    color-dark.json  ← Dark theme colors
    spacing.json
    typography.json
    radii.json
    motion.json
  figma/             ← Tokens Studio sync target (auto-generated)
    tokens.json

src/tokens/
  generated/         ← Style Dictionary output (auto-generated, don't edit)
    variables-light.css
    variables-dark.css
    tokens-light.ts
    tokens-dark.ts
  colors.ts          ← Original hand-written tokens (kept for reference)
  typography.ts
  spacing.ts
  ...
```
