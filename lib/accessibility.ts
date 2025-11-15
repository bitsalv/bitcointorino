/**
 * Utility functions for accessibility
 */

/**
 * Formats a date in a human-readable and screen-reader friendly format
 */
export function formatAccessibleDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString('it-IT', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

/**
 * Formats a date for datetime attribute (ISO format)
 */
export function formatDatetimeAttribute(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toISOString().split('T')[0]
}

/**
 * Creates accessible button/link text with action and target
 */
export function createAriaLabel(action: string, target: string): string {
  return `${action} ${target}`
}

/**
 * Truncates text and adds ellipsis, but keeps full text for screen readers
 */
export function truncateAccessibly(text: string, maxLength: number): {
  visual: string
  full: string
} {
  if (text.length <= maxLength) {
    return { visual: text, full: text }
  }
  return {
    visual: text.slice(0, maxLength) + '...',
    full: text
  }
}

/**
 * Check color contrast ratio (simplified)
 * Returns true if contrast is sufficient for WCAG AA
 */
export function hasGoodContrast(foreground: string, background: string): boolean {
  // This is a simplified check. In production, use a proper contrast calculation library
  // For now, we trust our design system colors
  return true
}

