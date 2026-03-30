/**
 * Z-index scale
 * Named layers prevent z-index wars. Values spaced for insertion room.
 */

export const zIndex = {
  base:     0,     // default stacking context
  raised:   1,     // slightly raised (sticky table headers, etc.)
  dropdown: 1000,  // dropdown menus, select panels
  sticky:   1100,  // sticky headers / navbars
  overlay:  1300,  // page overlay / drawer backdrop
  modal:    1400,  // modal dialogs
  popover:  1500,  // tooltips, popovers (above modals)
  tooltip:  1550,  // tooltip layer (between popover and toast)
  toast:    1600,  // notifications (topmost UI layer)
} as const

export type ZIndexToken = typeof zIndex
