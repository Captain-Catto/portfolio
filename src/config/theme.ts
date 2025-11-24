// Theme color configuration based on test.html reference
export const THEME_COLORS = {
  light: {
    // Background colors (from lightest to darkest)
    bg: {
      page: "#ECFAE5", // Main page background
      card: "#DDF6D2", // Card background
      muted: "#CAE8BD", // Muted/secondary background
      accent: "#B0DB9C", // Accent/hover background
    },
    // Border colors
    border: {
      default: "#B0DB9C", // Default border
      light: "#CAE8BD", // Light border
    },
    // Text colors
    text: {
      primary: "#1F2937", // Primary text (gray-900)
      secondary: "#4B5563", // Secondary text (gray-600)
      muted: "#6B7280", // Muted text (gray-500)
    },
  },
  dark: {
    // Background colors (from darkest to lightest) - matching test.html
    bg: {
      page: "#0D0D0D", // Main page background (darkest - close to black)
      card: "#1A1A1A", // Card background (dark gray)
      cardDark: "#141414", // Even darker card background for nested elements
      muted: "#2A2A2A", // Muted/secondary background (medium dark)
      accent: "#333333", // Accent/hover background
      iconCard: "rgba(255, 255, 255, 0.05)", // Subtle card background
      iconBackground: "rgba(255, 255, 255, 0.1)", // Icon backgrounds
    },
    // Border colors
    border: {
      default: "rgba(255, 255, 255, 0.1)", // Default border
      light: "rgba(255, 255, 255, 0.05)", // Light border
    },
    // Text colors
    text: {
      primary: "#FFFFFF", // Primary text (pure white)
      secondary: "#E5E5E5", // Secondary text (light gray)
      muted: "rgba(255, 255, 255, 0.7)", // Muted text (white with opacity)
      testimonial: "rgba(255, 255, 255, 0.8)", // Testimonial text
      dark: "#1F2937", // Dark text for special cases
    },
  },
  // Common colors (used in both themes) - earth tone accents
  common: {
    earth: {
      primary: "#A59D84", // Main earth tone accent
      secondary: "#948979", // Secondary earth tone
      tertiary: "#C1BAA1", // Tertiary earth tone
    },
    pink: {
      500: "#EC4899",
      600: "#DB2777",
    },
    blue: {
      600: "#2563EB",
    },
    green: {
      availability: "#6DD33D", // Green dot for "Available" status
      400: "#4ADE80",
      600: "#16A34A",
    },
  },
};

// Helper function to get theme colors
export const getThemeColors = (theme: "light" | "dark") => THEME_COLORS[theme];
