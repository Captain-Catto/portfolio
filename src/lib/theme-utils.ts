// Theme utility classes for components
export const themeClasses = {
  // Cards
  card: 'bg-card border-2 border-border dark:bg-card dark:border-border',
  cardSecondary: 'bg-[var(--bg-card-secondary)] border-border',

  // Text
  textPrimary: 'text-foreground',
  textSecondary: 'text-foreground/80',
  textMuted: 'text-foreground/50',

  // Backgrounds
  bgPage: 'bg-background',
  bgCard: 'bg-card',
  bgMuted: 'bg-muted',

  // Interactive
  hover: 'hover:bg-muted/50 transition-all duration-300',
  hoverCard: 'hover:bg-muted/80 transition-all duration-300',

  // Borders
  border: 'border-border',
  borderSubtle: 'border-border/50',
} as const;
