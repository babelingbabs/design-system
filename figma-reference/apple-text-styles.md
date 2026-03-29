# Apple iOS 26 Text Styles (from Figma kit)
## Extracted via Figma API

### Default Size Category (Large — iOS default)
| Style       | Font    | Size  | Weight | Line Height | Letter Spacing |
|-------------|---------|-------|--------|-------------|----------------|
| Large Title | SF Pro  | 34px  | 400    | 41px        | 0.40           |
| Title 1     | SF Pro  | 28px  | 400    | 34px        | 0.38           |
| Title 2     | SF Pro  | 22px  | 400    | 28px        | -0.26          |
| Title 3     | SF Pro  | 20px  | 400    | 25px        | -0.45          |
| Headline    | SF Pro  | 17px  | 590*   | 22px        | -0.43          |
| Body        | SF Pro  | 17px  | 400    | 22px        | -0.43          |
| Callout     | SF Pro  | 16px  | 400    | 21px        | -0.31          |
| Subhead     | SF Pro  | 15px  | 400    | 20px        | -0.23          |
| Footnote    | SF Pro  | 13px  | 400    | 18px        | -0.08          |
| Caption 1   | SF Pro  | 12px  | 400    | 16px        | 0              |
| Caption 2   | SF Pro  | 11px  | 400    | 13px        | 0.06           |

*590 = Semibold in SF Pro's weight axis

### Bold/Emphasized Variants
| Style       | Font    | Size  | Weight | Line Height | Letter Spacing |
|-------------|---------|-------|--------|-------------|----------------|
| Large Title | SF Pro  | 34px  | 700    | 41px        | 0.40           |
| Title 1     | SF Pro  | 28px  | 700    | 34px        | 0.38           |
| Title 2     | SF Pro  | 22px  | 700    | 28px        | -0.26          |
| Title 3     | SF Pro  | 20px  | 590    | 25px        | -0.45          |
| Headline    | SF Pro  | 17px  | 590    | 22px        | -0.43          |
| Footnote    | SF Pro  | 13px  | 590    | 18px        | -0.08          |
| Caption 2   | SF Pro  | 11px  | 590    | 13px        | 0.06           |
| Caption 1   | SF Pro  | 12px  | 510    | 16px        | 0              |

### Apple iOS System Colors (from kit — uses variables)
**Light Mode:**
- Backgrounds: #FFFFFF (primary), #F2F2F7 (secondary), #FFFFFF (tertiary)
- Labels: #000000 (primary), #3C3C43/60% (secondary), #3C3C43/30% (tertiary), #3C3C43/18% (quaternary)
- Separators: #C6C6C8, #000000/12% (opaque variant)

**Dark Mode:**
- Backgrounds: #000000 (primary), #1C1C1E (secondary), #2C2C2E (tertiary)
- Labels: #FFFFFF (primary), #EBEBF5/70% (secondary), #EBEBF5/30% (tertiary), #EBEBF5/16% (quaternary)
- Separators: #38383A, #FFFFFF/17% (opaque variant)

**System Colors (Light / Dark) — from Apple HIG + Figma kit:**
| Color  | Light     | Dark      |
|--------|-----------|-----------|
| Red    | #FF3B30   | #FF453A   |
| Orange | #FF9500   | #FF9F0A   |
| Yellow | #FFCC00   | #FFD60A   |
| Green  | #34C759   | #30D158   |
| Mint   | #00C7BE   | #63E6E2   |
| Teal   | #30B0C7   | #40CBE0   |
| Cyan   | #32ADE6   | #64D2FF   |
| Blue   | #007AFF   | #0A84FF   |
| Indigo | #5856D6   | #5E5CE6   |
| Purple | #AF52DE   | #BF5AF2   |
| Pink   | #FF2D55   | #FF375F   |
| Brown  | #A2845E   | #AC8E68   |

**System Grays (Light / Dark):**
| Gray   | Light     | Dark      |
|--------|-----------|-----------|
| Gray   | #8E8E93   | #8E8E93   |
| Gray 2 | #AEAEB2   | #636366   |
| Gray 3 | #C7C7CC   | #48484A   |
| Gray 4 | #D1D1D6   | #3A3A3C   |
| Gray 5 | #E5E5EA   | #2C2C2E   |
| Gray 6 | #F2F2F7   | #1C1C1E   |

### Notes
- The Figma file stores most color values as Figma Variables, which require `file_variables:read` scope
- Text styles use SF Pro; our system maps this to Inter (similar proportions, open source)
- Weight 590 in SF Pro ≈ Semibold (600 in Inter)
- Weight 510 in SF Pro ≈ Medium (500 in Inter)
