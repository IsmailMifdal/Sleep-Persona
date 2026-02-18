// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  chronotype?: 'early' | 'intermediate' | 'late';
  constraints: UserConstraints;
  objectives: string[];
  stressBaseline: number; // 1-10
  professionalProfile: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserConstraints {
  workSchedule?: {
    type: 'fixed' | 'shift' | 'flexible' | 'hybrid';
    startTime?: string;
    endTime?: string;
  };
  hasChildren: boolean;
  childrenWakeUpTime?: string;
  averageStressLevel: number; // 1-10
  exerciseFrequency?: 'none' | 'occasional' | 'regular' | 'daily';
  caffeineIntake?: 'none' | 'low' | 'moderate' | 'high';
  screenTimeEvening?: 'low' | 'moderate' | 'high';
}

// Sleep Entry Types
export interface SleepEntry {
  id: string;
  userId: string;
  date: Date;
  bedtime: Date;
  wakeTime: Date;
  sleepDuration: number; // in hours
  awakenings: number;
  perceivedQuality: number; // 1-10
  morningEnergy: number; // 1-10
  eveningStress: number; // 1-10
  calculatedScore: number; // 0-100
  notes?: string;
  createdAt: Date;
}

// Persona Types
export type PersonaType = 
  | 'disciplined_sleeper'
  | 'stressed_insomniac'
  | 'irregular_sleeper'
  | 'recovery_needed'
  | 'sleep_deprived'
  | 'optimal_sleeper';

export interface Persona {
  id: string;
  userId: string;
  primaryType: PersonaType;
  traits: PersonaTraits;
  adaptiveMode: AdaptiveMode;
  riskFlags: string[];
  confidence: number; // 0-100
  generatedAt: Date;
  validUntil: Date;
}

export interface PersonaTraits {
  stressSensitivity: 'low' | 'moderate' | 'high';
  sleepDebtTolerance: 'low' | 'moderate' | 'high';
  consistencyLevel: 'low' | 'moderate' | 'high';
  circadianFlexibility: 'low' | 'moderate' | 'high';
  recoverySpeed: 'slow' | 'moderate' | 'fast';
}

export type AdaptiveMode = 
  | 'recovery_mode'
  | 'stress_protection'
  | 'discipline_builder'
  | 'circadian_reset'
  | 'burnout_prevention'
  | 'maintenance';

// Routine Types
export interface Routine {
  id: string;
  userId: string;
  personaId: string;
  date: Date;
  type: 'evening' | 'morning';
  steps: RoutineStep[];
  totalDuration: number; // in minutes
  suggestedStartTime: Date;
  completed: boolean;
  completionRate: number; // 0-100
  effectiveness?: number; // 1-10, filled after sleep
}

export interface RoutineStep {
  id: string;
  order: number;
  title: string;
  description: string;
  duration: number; // in minutes
  category: 'relaxation' | 'hygiene' | 'environment' | 'mindfulness' | 'preparation';
  intensity: 'light' | 'moderate' | 'deep';
  completed: boolean;
  skipped: boolean;
  icon?: string;
}

// Recommendation Types
export interface Recommendation {
  id: string;
  userId: string;
  type: 'bedtime' | 'activity' | 'avoidance' | 'preparation' | 'recovery';
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  category: string;
  validFrom: Date;
  validUntil: Date;
  active: boolean;
}

// Analytics Types
export interface SleepMetrics {
  averageSleepDuration: number;
  averageQuality: number;
  averageEnergy: number;
  consistencyScore: number;
  sleepDebt: number;
  weeklyTrend: 'improving' | 'stable' | 'declining';
}

export interface Pattern {
  type: 'bedtime_consistency' | 'weekend_effect' | 'stress_impact' | 'recovery_pattern';
  detected: boolean;
  severity: 'low' | 'moderate' | 'high';
  description: string;
  recommendation: string;
}

// Notification Types
export interface NotificationConfig {
  enabled: boolean;
  bedtimeReminder: boolean;
  bedtimeReminderOffset: number; // minutes before
  morningCheckin: boolean;
  morningCheckinTime: string;
  routineStart: boolean;
  recoveryAlert: boolean;
  adaptiveReminders: boolean;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface OnboardingData {
  sleepSchedule: {
    typicalBedtime: string;
    typicalWakeTime: string;
    weekendDifference: boolean;
  };
  sleepQuality: {
    difficultyFallingAsleep: boolean;
    frequentAwakenings: boolean;
    earlyWaking: boolean;
    unrefreshed: boolean;
  };
  lifestyle: {
    workSchedule: UserConstraints['workSchedule'];
    stressLevel: number;
    exerciseFrequency: string;
    caffeineIntake: string;
    screenTime: string;
  };
  goals: string[];
  challenges: string[];
}

// Dashboard Types
export interface DashboardData {
  persona: Persona;
  todaySleepScore: number;
  eveningPlan: Routine;
  dailyAdvice: Recommendation[];
  recoveryStatus: 'good' | 'moderate' | 'poor';
  streakDays: number;
}
