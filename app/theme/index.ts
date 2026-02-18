// Sleep Persona Color Palette
export const colors = {
  // Primary
  primary: '#6366F1', // Indigo
  primaryDark: '#4F46E5',
  primaryLight: '#818CF8',
  
  // Background
  background: '#0F0F1E',
  backgroundSecondary: '#1A1A2E',
  backgroundCard: '#16213E',
  
  // Surface
  surface: '#1E2741',
  surfaceLight: '#2A3854',
  
  // Text
  text: '#FFFFFF',
  textSecondary: '#A8B2D1',
  textTertiary: '#6B7694',
  
  // Accent
  accent: '#10B981', // Green for positive
  accentWarning: '#F59E0B', // Orange for warning
  accentDanger: '#EF4444', // Red for danger
  
  // Sleep States
  sleepExcellent: '#10B981',
  sleepGood: '#3B82F6',
  sleepModerate: '#F59E0B',
  sleepPoor: '#EF4444',
  
  // Persona Colors
  personaDisciplined: '#3B82F6',
  personaStressed: '#EF4444',
  personaIrregular: '#F59E0B',
  personaRecovery: '#8B5CF6',
  personaDeprived: '#EC4899',
  personaOptimal: '#10B981',
  
  // Adaptive Modes
  modeRecovery: '#8B5CF6',
  modeStress: '#EF4444',
  modeDiscipline: '#3B82F6',
  modeCircadian: '#F59E0B',
  modeBurnout: '#EC4899',
  
  // UI
  border: '#2A3854',
  divider: '#1E2741',
  shadow: 'rgba(0, 0, 0, 0.5)',
  overlay: 'rgba(0, 0, 0, 0.7)',
  
  // Status
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const typography = {
  h1: {
    fontSize: 32,
    fontWeight: '700' as const,
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontWeight: '600' as const,
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600' as const,
    lineHeight: 28,
  },
  h4: {
    fontSize: 18,
    fontWeight: '600' as const,
    lineHeight: 24,
  },
  body: {
    fontSize: 16,
    fontWeight: '400' as const,
    lineHeight: 24,
  },
  bodySmall: {
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400' as const,
    lineHeight: 16,
  },
  button: {
    fontSize: 16,
    fontWeight: '600' as const,
    lineHeight: 24,
  },
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  round: 9999,
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 5.84,
    elevation: 6,
  },
};

export const theme = {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
};

export type Theme = typeof theme;
