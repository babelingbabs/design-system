/**
 * Style Dictionary v4 config
 *
 * Transforms W3C-format token JSON into:
 *   - CSS custom properties (for runtime use)
 *   - TypeScript constants (for type-safe component development)
 *
 * Token source: tokens/base/*.json (W3C DTCG format)
 * These same files can be synced from Figma via Tokens Studio plugin.
 */

import StyleDictionary from 'style-dictionary'

// ─── Light theme ────────────────────────────────────────
const lightConfig = new StyleDictionary({
  source: [
    'tokens/base/color.json',
    'tokens/base/spacing.json',
    'tokens/base/typography.json',
    'tokens/base/radii.json',
    'tokens/base/motion.json',
  ],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/tokens/generated/',
      files: [
        {
          destination: 'variables-light.css',
          format: 'css/variables',
          options: {
            selector: ':root',
            outputReferences: true,
          },
        },
      ],
    },
    ts: {
      transformGroup: 'js',
      buildPath: 'src/tokens/generated/',
      files: [
        {
          destination: 'tokens-light.ts',
          format: 'javascript/es6',
        },
      ],
    },
  },
})

// ─── Dark theme ─────────────────────────────────────────
const darkConfig = new StyleDictionary({
  source: [
    'tokens/base/color-dark.json',
    'tokens/base/spacing.json',
    'tokens/base/typography.json',
    'tokens/base/radii.json',
    'tokens/base/motion.json',
  ],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/tokens/generated/',
      files: [
        {
          destination: 'variables-dark.css',
          format: 'css/variables',
          options: {
            selector: '[data-theme="dark"], .dark',
            outputReferences: true,
          },
        },
      ],
    },
    ts: {
      transformGroup: 'js',
      buildPath: 'src/tokens/generated/',
      files: [
        {
          destination: 'tokens-dark.ts',
          format: 'javascript/es6',
        },
      ],
    },
  },
})

// Build both themes
await lightConfig.buildAllPlatforms()
await darkConfig.buildAllPlatforms()

console.log('✅ Design tokens built successfully!')
console.log('   → src/tokens/generated/variables-light.css')
console.log('   → src/tokens/generated/variables-dark.css')
console.log('   → src/tokens/generated/tokens-light.ts')
console.log('   → src/tokens/generated/tokens-dark.ts')
